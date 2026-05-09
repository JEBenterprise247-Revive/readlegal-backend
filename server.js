import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import paraRoutes from "./routes/paraRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/para", paraRoutes);

app.get("/", (req, res) => {
  res.send("READLEGAL Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
