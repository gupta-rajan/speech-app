import express from "express";
const router = express.Router();
import { getEvents, createEvent, getEventById, updateEvent, deleteEvent } from "../controllers/eventController.js";
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getEvents).post(protect, admin, createEvent);
router.route('/:id').get(getEventById).put(protect, admin, updateEvent).delete(protect, admin, deleteEvent);

export default router;