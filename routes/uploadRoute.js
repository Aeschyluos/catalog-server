import express from "express";
import upload from "../multer.js";

const router = express.Router();

// Middleware to verify admin API key
const verifyAdmin = (req, res, next) => {
  const adminKey = req.headers["x-admin-key"];

  if (adminKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
};

router.post("/", verifyAdmin, upload.single("image"), (req, res) => {
  res.json({ imageUrl: req.file.path });
});

export default router;
