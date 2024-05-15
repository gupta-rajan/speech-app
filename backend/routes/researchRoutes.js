import express from "express";
const router = express.Router();
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  getResearch,
  getResearchById,
  createResearch,
  updateResearch,
  deleteResearch,
} from "../controllers/researchController.js";

router.route("/").get(getResearch).post(protect, admin, createResearch);
router
  .route("/:id")
  .get(getResearchById)
  .put(protect, admin, updateResearch)
  .delete(protect, admin, deleteResearch);

export default router;
