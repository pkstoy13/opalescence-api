import express, {
  type Request,
  type Response,
  type Application,
} from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { uptime } from "node:process";
import categoryRoutes from "./routes/categoryRoutes.js";
import entryRoutes from "./routes/entryRoutes.js";

dotenv.config();
connectDB();

const app: Application = express();

// Health Check
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", uptime: process.uptime() });
});

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/entries", entryRoutes);

const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
