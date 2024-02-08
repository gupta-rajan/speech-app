import asyncHandler from "../middleware/asyncHandler.js";
import Project from "../models/projectsModel.js";

//@desc Fetch all projects
//@route GET/api/projects
//@access Public
const getProjects = asyncHandler(async(req,res)=>{
    const projects = await Project.find({});
    res.json(projects);
});

export {getProjects};