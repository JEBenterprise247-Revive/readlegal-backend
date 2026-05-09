import express from "express";
import { simplifyForm } from "../controllers/formsController.js";

const router = express.Router();

router.post("/", simplifyForm);

export default router;
