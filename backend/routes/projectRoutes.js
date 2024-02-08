import express from "express";
const router = express.Router();
import { getProjects } from "../controllers/projectController.js";

router.route('/').get(getProjects);

export default router;