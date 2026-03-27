import mongoose, { Document } from "mongoose";

export interface IAnswer extends Document {
  content: string;
  user: mongoose.Types.ObjectId;
  question: mongoose.Types.ObjectId;
  votes: number;
}

const answerSchema = new mongoose.Schema<IAnswer>(
  {
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
    votes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<IAnswer>("Answer", answerSchema);