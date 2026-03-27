import express from "express";
import {
  createQuestion,
  getAllQuestions,
} from "../controllers/questionController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", protect, createQuestion);
router.get("/", getAllQuestions);

export default router;