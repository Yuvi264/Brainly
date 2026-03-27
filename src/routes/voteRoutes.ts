import express from "express";
import { voteAnswer } from "../controllers/voteController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, voteAnswer);

export default router;