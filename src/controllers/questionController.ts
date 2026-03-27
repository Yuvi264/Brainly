import { Response, Request } from "express";
import Question from "../models/Question";

export const createQuestion = async (req: Request, res: Response) => {
  try {
    const { title, description, tags } = req.body;

    const question = await Question.create({
      title,
      description,
      user: req.user!.id,
      tags
    });

    res.json(question);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllQuestions = async (_req: Request, res: Response) => {
  try {
    const questions = await Question.find().populate("user", "name");
    res.json(questions);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};