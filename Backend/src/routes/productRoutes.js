import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";
import upload from "../middlewares/upload.js";
import resizeProductImages from "../middlewares/resizeImages.js";

const router = express.Router();

router.route("/products").get(getProducts);
router.route("/products/:productId").get(getProduct);
router.route("/products").post(createProduct);
router
  .route("/products/:productId")
  .put(upload, resizeProductImages, updateProduct);
router.route("/products/:productId").delete(deleteProduct);

export default router;
