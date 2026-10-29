import { Router } from "express";
import {
  getBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
} from "../controllers/brandController.js";

const router = Router();

router.route("/brands").get(getBrands).post(createBrand);

router.route("/brands/:id").get(getBrand).put(updateBrand).delete(deleteBrand);

export default router;
