import express from "express";
import {
  createAnswer,
  getAnswersByQuestion,
} from "../controllers/answerController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, createAnswer);
router.get("/:questionId", getAnswersByQuestion);

export default router;