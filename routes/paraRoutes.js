import express from "express";
import { analyzePARA } from "../controllers/paraController.js";

const router = express.Router();

router.post("/", analyzePARA);

export default router;
