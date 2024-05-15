import express from "express";
const router = express.Router();
import { getFaculty, createFaculty,getFacultyById ,updateFaculty, deleteFaculty} from "../controllers/facultyController.js";
import {protect, admin} from '../middleware/authMiddleware.js';

router.route('/').get(getFaculty).post(protect,admin,createFaculty);
router.route('/:id').get(getFacultyById).put(protect,admin,updateFaculty).delete(protect,admin,deleteFaculty);

export default router;