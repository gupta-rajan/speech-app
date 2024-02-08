import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import studentRoutes from './routes/studentRoutes.js'
import facultyRoutes from './routes/facultyRoutes.js'
import newsRoutes from './routes/newsRoutes.js';
import projectRoutes from './routes/projectRoutes.js'
const port = process.env.PORT || 5000;

connectDB(); //Connect to MongoDB

const app= express();

app.get('/',(req,res)=>{
    res.send('API is running');
});

app.use('/api/news',newsRoutes);
app.use('/api/people/faculty',facultyRoutes);
app.use('/api/people/students',studentRoutes);
app.use('/api/projects',projectRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`Server is running on port ${port}`));