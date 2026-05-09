import express from "express";
import { defineTerm } from "../controllers/dictController.js";

const router = express.Router();

router.post("/", defineTerm);

export default router;
