import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/categories").get(getCategories);
router.route("/categories/:categoryId").get(getCategory);
router.route("/categories").post(createCategory);
router.route("/categories/:categoryId").put(updateCategory);
router.route("/categories/:categoryId").delete(deleteCategory);

export default router;
