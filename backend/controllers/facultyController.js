import asyncHandler from "../middleware/asyncHandler.js";
import Faculty from "../models/facultyModel.js"

//@desc Fetch all faculties
//@route GET/api/people/faculty
//@access Public
const getFaculty = asyncHandler(async(req,res)=>{
    const faculty = await Faculty.find({});
    res.json(faculty);
});

export {getFaculty};