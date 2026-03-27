import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  reputation: number;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    reputation: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);