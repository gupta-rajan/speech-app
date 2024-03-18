import express from "express";
const router = express.Router();
import { getEvents } from "../controllers/eventController.js";

router.route('/').get(getEvents);

export default router;