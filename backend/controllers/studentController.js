import asyncHandler from "../middleware/asyncHandler.js";
import Students from "../models/studentsModel.js";

//@desc Fetch all students
//@route GET/api/people/students
//@access Public
const getStudents = asyncHandler(async(req,res)=>{
    const students = await Students.find({});
    res.json(students);
});

export {getStudents};