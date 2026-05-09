import { runOCR } from "../services/ocrService.js";

export async function processOCR(req, res) {
  try {
    const fileBuffer = req.file.buffer;
    const text = await runOCR(fileBuffer);
    res.json({ text });
  } catch (err) {
    res.status(500).json({ error: "OCR failed" });
  }
}
