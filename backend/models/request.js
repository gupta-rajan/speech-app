import mongoose from 'mongoose';

const requestSchema = mongoose.Schema({
    ipAddress: {
        type: String,
        required: true,
    },
    macAddress: {
        type: String,
        required: true,
    },
    deviceType: {
        type: String,
        required: true,
    },
    requestTime: {
        type: Date,
        required: true,
    },
    responseTime: {
        type: Number, // Storing response time in milliseconds
        required: true,
    },
});

const Request = mongoose.model('Request', requestSchema);

export default Request;