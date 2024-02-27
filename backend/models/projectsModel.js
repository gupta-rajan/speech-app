import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Ongoing', 'Completed'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sponsoredBy: {
        type: String,
        required: true
    },
    principalInvestigator: {
        type: String,
    },
},{
    timestamps:true
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
