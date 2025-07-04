import express from "express";
import cors from "cors";

import productRoute from "./routes/productRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
// import categoryRoute from "./routes/categoryRoute.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:8080", // allow requests from your catalog frontend
    credentials: true,
  })
);

app.use(express.json());

// ROUTES
app.use("/api/products", productRoute);
app.use("/api/upload", uploadRoute);
// app.use("/api/categories", categoryRoutes);

export default app;
