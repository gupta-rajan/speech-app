import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import news from './data/news.js';
import faculty from './data/faculty.js';
import students from './data/students.js';
import projectData from './data/projects.js'
const port = process.env.PORT || 5000;

const app= express();

app.get('/',(req,res)=>{
    res.send('API is running');
});

app.get('/api/news',(req,res)=>{
    res.json(news);
});

app.get('/api/people/faculty',(req,res)=>{
    res.json(faculty);
});

app.get('/api/people/students',(req,res)=>{
    res.json(students);
});

app.get('/api/projects',(req,res)=>{
    res.json(projectData);
});



app.listen(port,()=>console.log(`Server is running on port ${port}`));