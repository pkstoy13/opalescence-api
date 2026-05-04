import { Schema, model, type Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  color: string;
  userId: string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  color: { type: String, default: "#000000" },
  userId: { type: String, required: true },
});

export const Category = model<ICategory>("Category", categorySchema);
