import { runDictionary } from "../services/dictService.js";

export async function defineTerm(req, res) {
  try {
    const { term } = req.body;
    const result = await runDictionary(term);
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: "Dictionary lookup failed" });
  }
}
