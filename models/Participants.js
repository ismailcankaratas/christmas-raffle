import mongoose from "mongoose";

const ParticipantsSchema = new mongoose.Schema(
  {
    nameSurname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Participants ||
  mongoose.model("Participants", ParticipantsSchema);
