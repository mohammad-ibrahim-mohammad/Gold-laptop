import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/users").get(getUsers);
router.route("/users/:userId").get(getUser);
router.route("/users").post(createUser);
router.route("/users/:userId").put(updateUser);
router.route("/users/:userId").delete(deleteUser);

export default router;
