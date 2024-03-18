import asyncHandler from "../middleware/asyncHandler.js";
import Event from "../models/eventsModel.js"

//@desc Fetch all events
//@route GET/api/events
//@access Public
const getEvents = asyncHandler(async(req,res)=>{
    const events = await Event.find({});
    res.json(events);
});

export {getEvents};