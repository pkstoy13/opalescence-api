import type { Request, Response } from "express";
import { Entry } from "../models/Entry.js";

export const getAllEntries = async (req: Request, res: Response) => {
  try {
    const entries = await Entry.find(); // Later: .find({ userId: req.user.id })
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching entries" });
  }
};
