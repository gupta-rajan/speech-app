import express from "express";
const router = express.Router();
import { getFaculty } from "../controllers/facultyController.js";

router.route('/').get(getFaculty);

export default router;