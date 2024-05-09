import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import news from "./data/news.js";
import students from "./data/students.js";
import faculty from "./data/faculty.js";
import projectData from "./data/projects.js";
import positions from "./data/positions.js";
import events from "./data/events.js";
import research from "./data/research.js";
import users from "./data/users.js";

import News from "./models/newsModel.js";
import Student from "./models/studentsModel.js";
import Faculty from "./models/facultyModel.js";
import Project from "./models/projectsModel.js";
import Position from "./models/positionsModel.js";
import Event from "./models/eventsModel.js";
import Research from "./models/researchModel.js";
import User from "./models/userModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async()=>{
    try {
        await News.deleteMany();
        await Student.deleteMany();
        await Faculty.deleteMany();
        await Project.deleteMany();
        await Position.deleteMany();
        await Event.deleteMany();
        await Research.deleteMany();
        await User.deleteMany();

        //Insert News data
        const createdNews = await News.insertMany(news);

        // Insert student data
        const createdStudents = await Student.insertMany(students);

        // Insert faculty data
        const createdFaculty = await Faculty.insertMany(faculty);

        // Insert project data
        const createdProjects = await Project.insertMany(projectData);

        //Insert position data
        const createdPositions = await Position.insertMany(positions);

        //Insert event data
        const createdEvents = await Event.insertMany(events);

        //Insert Research data
        const researchData = await Research.insertMany(research);

        // Insert user data
        const createdUsers = await User.insertMany(users);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async()=>{
    try {
        await News.deleteMany();
        await Student.deleteMany();
        await Faculty.deleteMany();
        await Project.deleteMany();
        await Position.deleteMany();
        await Event.deleteMany();
        await Research.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2]==='-d'){
    destroyData();
}
else{
    importData();
}