import asyncHandler from "../middleware/asyncHandler.js";
import Research from "../models/researchModel.js";

// @desc    Fetch all researches
// @route   GET /api/research
// @access  Public
const getResearch = asyncHandler(async (req, res) => {
  const research = await Research.find({});
  res.json(research);
});

// @desc    Fetch research by ID
// @route   GET /api/research/:id
// @access  Public
const getResearchById = asyncHandler(async (req, res) => {
  const research = await Research.findById(req.params.id);
  if (research) {
    res.json(research);
  } else {
    res.status(404).json;
    throw new Error('Resource not found');
  }
});

export { getResearch, getResearchById };