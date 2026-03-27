import { Request, Response } from "express";
import Answer from "../models/Answer";


export const createAnswer = async (req: Request, res: Response) => {
  try {
    const { content, questionId } = req.body;

    const answer = await Answer.create({
      content,
      question: questionId,
      user: req.user?.id,
    });

    res.json(answer);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getAnswersByQuestion = async (req: any, res: Response) => {
  try {
    const { questionId } = req.params;

    const answers = await Answer.find({ question: questionId })
      .populate("user", "name")
      .sort({ votes: -1 });

    res.json(answers);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};