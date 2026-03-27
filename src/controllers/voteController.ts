import { Request, Response } from "express";
import Vote from "../models/Vote";
import Answer from "../models/Answer";

interface AuthRequest extends Request {
  user?: { id: string };
}

export const voteAnswer = async (req: AuthRequest, res: Response) => {
  try {
    const { answerId, voteType } = req.body;

    const existingVote = await Vote.findOne({
      user: req.user?.id,
      answer: answerId,
    });

    if (existingVote) {
      existingVote.voteType = voteType;
      await existingVote.save();
    } else {
      await Vote.create({
        user: req.user?.id,
        answer: answerId,
        voteType,
      });
    }

    const answer = await Answer.findById(answerId);
    if (!answer) return res.status(404).json({ message: "Answer not found" });

    answer.votes += voteType === "upvote" ? 1 : -1;
    await answer.save();

    res.json(answer);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};