import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import _ from "lodash";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
const upload_directory = path.join(__dirname, "../uploads");

router.get("/single", (req, res) => {
  let files_array = fs.readdirSync(upload_directory);
  if (files_array.length === 0) {
    return res.status(503).json({ message: "No images available" });
  }
  let filename = _.sample(files_array); 
  res.sendFile(path.join(upload_directory, filename));
});

router.get("/multiple", (req, res) => {
  let files_array = fs.readdirSync(upload_directory);
  if (files_array.length === 0) {
    return res.status(503).json({ message: "No images available" });
  }
  let filenames = _.sampleSize(files_array, 3);  
  res.json(filenames); 
});

router.get("/file/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(upload_directory, filename);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "File not found" });
  }

  res.sendFile(filePath);
});

export default router;




