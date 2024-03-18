import express from "express";
const router = express.Router();
import { getPositions } from "../controllers/positionController.js";

router.route('/').get(getPositions);

export default router;