import express from "express";
const router = express.Router();
import { getStudents, createStudent, getStudentById, updateStudent, deleteStudent } from "../controllers/studentController.js";
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/')
    .get(getStudents)
    .post(protect, admin, createStudent);

router.route('/:id')
    .get(getStudentById)
    .put(protect, admin, updateStudent)
    .delete(protect, admin, deleteStudent);

export default router;