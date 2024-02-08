import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import news from "./data/news.js";
import students from "./data/students.js";
import faculty from "./data/faculty.js";
import projectData from "./data/projects.js";

import News from "./models/newsModel.js";
import Student from "./models/studentsModel.js";
import Faculty from "./models/facultyModel.js";
import Project from "./models/projectsModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async()=>{
    try {
        await News.deleteMany();
        await Student.deleteMany();
        await Faculty.deleteMany();
        await Project.deleteMany();

        //Insert News data
        const createdNews = await News.insertMany(news);

        // Insert student data
        const createdStudents = await Student.insertMany(students);

        // Insert faculty data
        const createdFaculty = await Faculty.insertMany(faculty);

        // Insert project data
        const createdProjects = await Project.insertMany(projectData);

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