import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    dates: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
        },
    ],
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

export default Event;