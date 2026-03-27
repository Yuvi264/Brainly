import mongoose, { Document } from "mongoose";

export interface IVote extends Document {
  user: mongoose.Types.ObjectId;
  answer: mongoose.Types.ObjectId;
  voteType: "upvote" | "downvote";
}

const voteSchema = new mongoose.Schema<IVote>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    answer: { type: mongoose.Schema.Types.ObjectId, ref: "Answer" },
    voteType: { type: String, enum: ["upvote", "downvote"] },
  },
  { timestamps: true }
);

export default mongoose.model<IVote>("Vote", voteSchema);