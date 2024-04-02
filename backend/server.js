import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import studentRoutes from './routes/studentRoutes.js'
import facultyRoutes from './routes/facultyRoutes.js'
import newsRoutes from './routes/newsRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import positionRoutes from './routes/positionRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import researchRoutes from './routes/researchRoutes.js';
import Request from './models/request.js';

const port = process.env.PORT || 5000;

connectDB(); //Connect to MongoDB

const app= express();

app.set('trust proxy', true); // Enable proxy trust

// Middleware to log incoming requests, measure response time, and save data in MongoDB
app.use(async (req, res, next) => {
    const start = Date.now(); // Record start time
    const ipAddress = req.ip;
    const userAgent = req.headers['user-agent'];
    const isMobile = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile|mobile|tablet/i.test(userAgent);
    const deviceType = isMobile ? 'Mobile Device' : 'Desktop/Laptop';
    const requestTime = new Date();

    try {
        // Get MAC address from request headers or other sources
        const macAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        // Check if the number of entries exceeds 10
        const count = await Request.countDocuments();
        if (count >= 100) {
            // If the limit is reached, delete the oldest entries to maintain only 10 entries
            const oldestRequests = await Request.find().sort({ requestTime: 1 }).limit(count - 9);
            await Request.deleteMany({ _id: { $in: oldestRequests.map(req => req._id) } });
        }

        // Check if a request from this IP address and MAC address already exists
        // const existingRequest = await Request.findOne({ ipAddress, macAddress });

    
        // Calculate response time in milliseconds
        res.on('finish', async () => {
            const end = Date.now(); // Record end time
            const responseTime = end - start;

            // Save request data with response time to MongoDB
            await Request.create({ ipAddress, macAddress, deviceType, requestTime, responseTime });
        });
    } catch (error) {
        console.error('Error saving request data to MongoDB:', error);
    }

    next();
});

app.use('/api/news',newsRoutes);
app.use('/api/people/faculty',facultyRoutes);
app.use('/api/people/students',studentRoutes);
app.use('/api/projects',projectRoutes);
app.use('/api/positions',positionRoutes);
app.use('/api/events',eventRoutes);
app.use('/api/research',researchRoutes);

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