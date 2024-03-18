import mongoose from 'mongoose';

const positionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    numberOfPositions: {
        type: Number,
        required: true
    },
    essentialQualification: {
        type: String,
        required: true
    },
    desirableQualification: {
        type: String
    },
    durationOfTenure: {
        type: String
    },
    ageLimit: {
        type: String
    },
    contactEmail: {
        type: String
    }
}, {
    timestamps: true
});

const Position = mongoose.model('Position', positionSchema);

export default Position;