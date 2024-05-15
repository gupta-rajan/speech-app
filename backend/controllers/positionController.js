import asyncHandler from "../middleware/asyncHandler.js";
import Position from "../models/positionsModel.js";

// @desc Fetch all positions
// @route GET /api/positions
// @access Public
const getPositions = asyncHandler(async (req, res) => {
    const positions = await Position.find({});
    res.json(positions);
});

// @desc Create a new position
// @route POST /api/positions
// @access Private/Admin
const createPosition = asyncHandler(async (req, res) => {
    const newPosition = new Position({
        title: "Sample Position",
        numberOfPositions: 1,
        essentialQualification: "Sample Qualification",
        // Add default values for other fields if needed
    });

    const createdPosition = await newPosition.save();
    res.status(201).json(createdPosition);
});

// @desc Fetch position by ID
// @route GET /api/positions/:id
// @access Public
const getPositionById = asyncHandler(async (req, res) => {
    const position = await Position.findById(req.params.id);
    if (position) {
        res.json(position);
    } else {
        res.status(404);
        throw new Error("Position not found");
    }
});

// @desc Update a position
// @route PUT /api/positions/:id
// @access Private/Admin
const updatePosition = asyncHandler(async (req, res) => {
    const { title, numberOfPositions, essentialQualification, desirableQualification, durationOfTenure, ageLimit, contactEmail } = req.body;

    const position = await Position.findById(req.params.id);

    if (position) {
        position.title = title;
        position.numberOfPositions = numberOfPositions;
        position.essentialQualification = essentialQualification;
        position.desirableQualification = desirableQualification;
        position.durationOfTenure = durationOfTenure;
        position.ageLimit = ageLimit;
        position.contactEmail = contactEmail;

        const updatedPosition = await position.save();
        res.json(updatedPosition);
    } else {
        res.status(404);
        throw new Error("Position not found");
    }
});

// @desc Delete a position
// @route DELETE /api/positions/:id
// @access Private/Admin
const deletePosition = asyncHandler(async (req, res) => {
    const position = await Position.findById(req.params.id);

    if (position) {
        await Position.deleteOne({ _id: position._id });
        res.json({ message: "Position removed" });
    } else {
        res.status(404);
        throw new Error("Position not found");
    }
});

export { getPositions, createPosition, getPositionById, updatePosition, deletePosition };