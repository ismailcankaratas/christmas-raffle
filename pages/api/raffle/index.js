import Matches from "../../../models/Matches";
import Participants from "../../../models/Participants";
import { sendMail } from "../../../utils/mail.";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method == "GET") {
    try {
      const matchs = await Matches.find();
      return res.status(200).json(matchs);
    } catch (error) {
      return res.status(500).json({ message: error.message, status: false });
    }
  }

  if (method == "POST") {
    try {
      const participants = await Participants.find();
      const matches = [];
      let newParticipants = participants;

      while (newParticipants.length > 0) {
        const newMatch = [];
        while (newMatch.length < 2) {
          const randomIndex = Math.floor(
            Math.random() * newParticipants.length
          );
          const participant = newParticipants[randomIndex];
          newMatch.push(participant?.email);
          newParticipants = newParticipants.filter(
            (x) => x.email != participant.email
          );
        }
        await Matches.create({ matches: newMatch });
        matches.push(newMatch);
      }

      for (let i = 0; i < matches.length; i++) {
        const emails = matches[i];
        const user1 = await Participants.findOne({
          email: emails[0],
        });
        const user2 = await Participants.findOne({
          email: emails[1],
        });
        const user1Mail = user1?.email;
        const user2Mail = user2?.email;

        const user1MailOptions = {
          to: user1Mail,
          subject: "Yılbası Çekilis Sonucun 🥳",
          mailType: "match",
          user: user2,
        };
        const user2MailOptions = {
          to: user2Mail,
          subject: "Yılbası Çekilis Sonucun 🥳",
          mailType: "match",
          user: user1,
        };
        sendMail(user1MailOptions);
        sendMail(user2MailOptions);
      }

      return res.json({
        mathes: matches,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message, status: false });
    }
  }
}
