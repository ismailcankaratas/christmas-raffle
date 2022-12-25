import mongoose from "mongoose";

const MatchesSchema = new mongoose.Schema({
    matches: {
        type: [String],
        require: true,
        unique: true,
    }
}, { timestamps: true });

export default mongoose.models.Matches || mongoose.model("Matches", MatchesSchema);