import jwt from "jsonwebtoken";
import Participants from "../../../models/Participants";
import { sendMail } from "../../../utils/mail";
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
      const emailCheck = await Participants.findOne({ email: req.body.email });
      if (emailCheck) {
        return res.json({
          message: "Zaten çekilise katıldınız!",
          status: false,
        });
      }
      const token = jwt.sign(req.body, process.env.SECRET);

      const emailOptions = {
        to: req.body.email,
        subject: `Gedik Yılbası Çekilisi'ne katılmak için son adım!`,
        token: token,
        mailType: "verify",
      };

      sendMail(emailOptions);

      return res.status(200).json({ status: true });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
