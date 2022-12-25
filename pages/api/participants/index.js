import jwt from "jsonwebtoken";
import Participants from "../../../models/Participants";
import { sendMail } from "../../../utils/mail.";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const participants = await Participants.find();
            res.status(200).json(participants);
        } catch (error) {
            return res.status(500).json({ message: error.message, status: false });
        }
    }

    if (method === "POST") {
        try {
            const usernameCheck = await Participants.findOne({ schoolNumber: req.body.schoolNumber });
            if (usernameCheck) {
                return res.json({ message: "Zaten çekilişe katıldınız!", status: false });
            }
            const userMail = req.body.schoolNumber + "@stu.gedik.edu.tr";
            const token = jwt.sign(req.body, process.env.SECRET);
            const mailOptions = {
                to: userMail,
                subject: `Gedik Yılbaşı Çekilişi'ne katılmak için son adım!`,
                token: token,
                mailType: "verify"
            }
            sendMail(mailOptions);
            return res.status(200).json({ status: true })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}