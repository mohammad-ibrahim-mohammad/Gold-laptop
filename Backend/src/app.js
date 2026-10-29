import express from "express";
import cors from "cors";
import { fileURLToPath } from "node:url";
import path from "node:path";

import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import tagsRouter from "./routes/tagsRoutes.js";
import categoryRouter from "./routes/CategoryRoutes.js";
import brandRouter from "./routes/brandRoutes.js";
import globalErrorHandler from "./controllers/errorController.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(productRouter);
app.use(userRouter);
app.use(tagsRouter);
app.use(categoryRouter);
app.use(brandRouter);
app.use(globalErrorHandler);

export default app;
