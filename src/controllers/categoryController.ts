import type { Request, Response } from "express";
import { Category } from "../models/Category.js";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find(); // Later: .find({ userId: req.user.id })
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories" });
  }
};
