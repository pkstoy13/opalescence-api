import { Schema, model, type Document, type Types } from "mongoose";

export interface IEntry extends Document {
  date: Date;
  amount: number;
  category: Types.ObjectId; // References the Category model
  recurring: boolean;
  autopay: boolean;
  note?: string;
  userId: string;
}

const entrySchema = new Schema<IEntry>(
  {
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    recurring: { type: Boolean, default: false },
    autopay: { type: Boolean, default: false },
    note: { type: String },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

export const Entry = model<IEntry>("Entry", entrySchema);
