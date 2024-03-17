import jwt from "jsonwebtoken";
import Participants from "../../../models/Participants";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method == "POST") {
    try {
      const user = jwt.verify(req.body.key, process.env.SECRET);
      const emailCheck = await Participants.findOne({ email: user.email });
      if (emailCheck) {
        return res
          .status(400)
          .json({ message: "Zaten çekilise katıldınız!", status: false });
      }
      const data = await Participants.create({
        nameSurname: user.name,
        email: user.email,
      });

      res.status(201).json({ status: true, user: data });
    } catch (error) {
      return res.status(500).json({ message: error.message, status: false });
    }
  }
}
