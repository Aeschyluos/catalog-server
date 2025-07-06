import express from "express";
import multer from "../multer.js";
import Product from "../models/productModel.js";
import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();
router.post("/add", multer.single("image"), async (req, res) => {
  try {
    const { name, brand, category, price, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image multer failed" });
    }

    const newProduct = new Product({
      name,
      brand,
      category,
      price,
      description,
      imageUrl: req.file.path, // Cloudinary image URL
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Product creation error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
});

router.get("/", getAllProducts);
router.get("/:id", getProductById);

export default router;
