import asyncHandler from "../middleware/asyncHandler.js";
import Project from "../models/projectsModel.js";

// @desc Fetch all projects
// @route GET /api/projects
// @access Public
const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
});

// @desc Create a new project
// @route POST /api/projects
// @access Private/Admin
const createProject = asyncHandler(async (req, res) => {
    const newProject = new Project({
        title: "Sample Project",
        status: "Ongoing",
        description: "Sample Description",
        sponsoredBy: "Sample Sponsor",
        principalInvestigator: "Sample Investigator",
    });

    const createdProject = await newProject.save();
    res.status(201).json(createdProject);
});

// @desc Fetch project by ID
// @route GET /api/projects/:id
// @access Public
const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (project) {
        res.json(project);
    } else {
        res.status(404);
        throw new Error("Project not found");
    }
});

// @desc Update a project
// @route PUT /api/projects/:id
// @access Private/Admin
const updateProject = asyncHandler(async (req, res) => {
    const { title, status, description, sponsoredBy, principalInvestigator } = req.body;

    const project = await Project.findById(req.params.id);

    if (project) {
        project.title = title;
        project.status = status;
        project.description = description;
        project.sponsoredBy = sponsoredBy;
        project.principalInvestigator = principalInvestigator || project.principalInvestigator;

        const updatedProject = await project.save();
        res.json(updatedProject);
    } else {
        res.status(404);
        throw new Error("Project not found");
    }
});

// @desc Delete a project
// @route DELETE /api/projects/:id
// @access Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project) {
        await Project.deleteOne({ _id: project._id });
        res.json({ message: "Project removed" });
    } else {
        res.status(404);
        throw new Error("Project not found");
    }
});

export { getProjects, createProject, getProjectById, updateProject, deleteProject };