import express from "express";
import authRoutes from "./routes/authRoutes";
import questionRoutes from "./routes/questionRoutes";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);

export default app;