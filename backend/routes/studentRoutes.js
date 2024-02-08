import express from "express";
const router = express.Router();
import { getStudents } from "../controllers/studentController.js";

router.route('/').get(getStudents);

export default router;