import asyncHandler from "../middleware/asyncHandler.js";
import Event from "../models/eventsModel.js";

// @desc Fetch all events
// @route GET /api/events
// @access Public
const getEvents = asyncHandler(async (req, res) => {
    const events = await Event.find({});
    res.json(events);
});

// @desc Create a new event
// @route POST /api/events
// @access Private/Admin
const createEvent = asyncHandler(async (req, res) => {
    console.log("create event");
    const newEvent = new Event({
        name: "Sample Event",
        description: "Sample Description",
        images: [] ,
        website: "http://example.com",
        dates: "Sample Dates"
    });

    console.log("inside createEvent");
    const createdEvent = await newEvent.save();
    res.status(201).json(createdEvent);
});

// @desc Fetch event by ID
// @route GET /api/events/:id
// @access Public
const getEventById = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    if (event) {
        res.json(event);
    } else {
        res.status(404);
        throw new Error('Event not found');
    }
});

// @desc Update an event
// @route PUT /api/events/:id
// @access Private/Admin
const updateEvent = asyncHandler(async (req, res) => {
    const { name, description,images,  website, dates } = req.body;

    const event = await Event.findById(req.params.id);

    if (event) {
        event.name = name || event.name;
        event.images = images || [];
        event.description = description || event.description;
        event.website = website || event.website;
        event.dates = dates || event.dates;

        // console.log("inside update event");
        
        const updatedEvent = await event.save();
        // console.log(updatedEvent);
        res.json(updatedEvent);
    } else {
        res.status(404);
        throw new Error('Event not found');
    }
});

// @desc Delete an event
// @route DELETE /api/events/:id
// @access Private/Admin
const deleteEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);

    if (event) {
        await Event.deleteOne({ _id: event._id });
        res.json({ message: 'Event removed' });
    } else {
        res.status(404);
        throw new Error('Event not found');
    }
});

export { getEvents, createEvent, getEventById, updateEvent, deleteEvent };