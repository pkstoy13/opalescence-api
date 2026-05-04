import express, {
  type Request,
  type Response,
  type Application,
} from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { uptime } from "node:process";

dotenv.config();
connectDB();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Health Check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
