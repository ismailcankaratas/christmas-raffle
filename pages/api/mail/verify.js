import jwt from "jsonwebtoken";
import Participants from "../../../models/Participants";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method == "POST") {
        try {
            const user = jwt.verify(req.body.key, process.env.SECRET);
            const userMail = user.schoolNumber + "@stu.gedik.edu.tr";
            const usernameCheck = await Participants.findOne({ schoolNumber: user.schoolNumber });
            if (usernameCheck) {
                return res.json({ message: "Zaten çekilişe katıldınız!", status: false });
            }
            const data = await Participants.create({
                nameSurname: user.name,
                schoolPart: user.schoolPart,
                email: userMail,
                schoolNumber: user.schoolNumber,
            });
            res.status(201).json({ status: true, user: data })
        } catch (error) {
            return res.status(500).json({ message: error.message, status: false });
        }
    }
}