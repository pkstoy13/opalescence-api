import { Router } from "express";
import { getAllEntries } from "../controllers/entryController.js";

const router = Router();
router.get("/", getAllEntries);
export default router;
