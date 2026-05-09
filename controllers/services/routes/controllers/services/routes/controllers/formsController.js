import { runFormSimplifier } from "../services/formsService.js";

export async function simplifyForm(req, res) {
  try {
    const { text } = req.body;
    const result = await runFormSimplifier(text);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Form simplification failed" });
  }
}
