import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    areaOfInterest: {
        type: String,
        required: true
    },
    personalWeb: {
        type: String
    },
    linkedin: {
        type: String
    },
    scholarLink: {
        type: String
    },
    department: {
        type: String,
        required: true
    },
    officeAddress: {
        type: String,
        required: true
    },
    labAddress: {
        type: String,
        required: true
    },
    phdStudents: [{
        type: String
    }],
    msStudents: [{
        type: String
    }],
    mtechStudents: [{
        type: String
    }],
    btechStudents: [{
        type: String
    }],
    publications: {
        type: String
    }
}, {
    timestamps: true
});

const Faculty = mongoose.model("Faculty", facultySchema);

export default Faculty;