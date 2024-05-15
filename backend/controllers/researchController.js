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
    res.status(404);
    throw new Error('Research item not found');
  }
});

// @desc    Create a new research item
// @route   POST /api/research
// @access  Private/Admin
const createResearch = asyncHandler(async (req, res) => {
  const newResearch = new Research({
    title: "Sample Research Title",
    images: [
      {
        imagePath: "/images/sample.jpg",
        content: [
          "Sample Content" // Example of mixed type content
        ]
      }
    ]
  });

  const createdResearch = await newResearch.save();
  res.status(201).json(createdResearch);
});

// @desc    Update a research item
// @route   PUT /api/research/:id
// @access  Private/Admin
const updateResearch = asyncHandler(async (req, res) => {
  const { title, images } = req.body;

  const researchItem = await Research.findById(req.params.id);

  if (researchItem) {
    researchItem.title = title;
    researchItem.images = images;

    const updatedResearch = await researchItem.save();
    res.json(updatedResearch);
  } else {
    res.status(404);
    throw new Error('Research item not found');
  }
});

// @desc    Delete a research item
// @route   DELETE /api/research/:id
// @access  Private/Admin
const deleteResearch = asyncHandler(async (req, res) => {
  const researchItem = await Research.findById(req.params.id);

  if (researchItem) {
    await researchItem.deleteOne({ _id: researchItem._id });
    res.json({ message: 'Research removed' });
  } else {
    res.status(404);
    throw new Error('Research item not found');
  }
});

export {
  getResearch,
  getResearchById,
  createResearch,
  updateResearch,
  deleteResearch,
};