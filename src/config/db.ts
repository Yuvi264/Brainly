import mongoose from "mongoose";
import User from "../models/User";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    await User.create({
      name: "Yuvi",
      email: "yuvi@test.com",
      password: "123456",
      reputation: 5
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};