import express from "express";
import {
  createTag,
  deleteTag,
  getTag,
  getTags,
  updateTag,
} from "../controllers/tagsController.js";

const router = express.Router();

router.route("/tags").get(getTags);
router.route("/tags/:tagId").get(getTag);
router.route("/tags").post(createTag);
router.route("/tags/:tagId").put(updateTag);
router.route("/tags/:tagId").delete(deleteTag);

export default router;
