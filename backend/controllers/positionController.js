import asyncHandler from "../middleware/asyncHandler.js";
import Position from "../models/positionsModel.js";

//@desc Fetch all positions
//@route GET/api/positions
//@access Public
const getPositions = asyncHandler(async(req,res)=>{
    const positions = await Position.find({});
    res.json(positions);
});

export {getPositions};