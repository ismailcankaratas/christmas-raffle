import mongoose from "mongoose";

const ParticipantsSchema = new mongoose.Schema({
    nameSurname: {
        type: String,
        required: true,
    },
    schoolPart: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    schoolNumber: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

export default mongoose.models.Participants || mongoose.model("Participants", ParticipantsSchema)