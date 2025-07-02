import express from "express";
import cors from "cors";

import productRoute from "./routes/productRoute.js";
// import categoryRoute from "./routes/categoryRoute.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:8080", // allow requests from your catalog frontend
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/products", productRoute);
// app.use("/api/categories", categoryRoutes);

export default app;
