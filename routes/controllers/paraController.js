import { runPARA } from "../services/aiService.js";

export async function analyzePARA(req, res) {
  try {
    const { text } = req.body;
    const result = await runPARA(text);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "PARA processing failed" });
  }
}
