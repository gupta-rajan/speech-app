import express from "express";
const router = express.Router();
import {
    getPositions,
    createPosition,
    getPositionById,
    updatePosition,
    deletePosition
} from "../controllers/positionController.js";
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/')
    .get(getPositions)
    .post(protect, admin, createPosition);

router.route('/:id')
    .get(getPositionById)
    .put(protect, admin, updatePosition)
    .delete(protect, admin, deletePosition);

export default router;