import path from 'path';
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

app.use('/api/news',newsRoutes);
app.use('/api/people/faculty',facultyRoutes);
app.use('/api/people/students',studentRoutes);
app.use('/api/projects',projectRoutes);

const __dirname = path.resolve();

if(process.env.NODE_ENV==='production'){
    //use static folder
    app.use(express.static(path.join(__dirname,'/frontend/build')));

    //any route that is not api will be redirected to index.html
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    });
}else{
    app.get('/',(req,res)=>{
        res.send('API is running');
    });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`Server is running on port ${port}`));