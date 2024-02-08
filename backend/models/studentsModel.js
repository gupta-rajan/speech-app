import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
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
    rollNumber: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    areasOfInterest: {
        type: String,
        required: true
    },
    thesisTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    scholarLink: {
        type: String
    },
    linkedin: {
        type: String
    },
    alumni: {
        type: String,
        enum: ['Yes', 'No'],
        required: true
    },
    alumniPosition: {
        type: String
    },
    publications: {
        type: String
    }
},{
    timestamps:true
});

const Student = mongoose.model("Student", studentSchema);

export default Student;