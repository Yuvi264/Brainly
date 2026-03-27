import mongoose, { Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  description: string;
  user: mongoose.Types.ObjectId;
  tags: string[];
}

const questionSchema = new mongoose.Schema<IQuestion>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    tags: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model<IQuestion>("Question", questionSchema);