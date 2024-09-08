import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from "./routes/auth.route.js";
import cors from 'cors';
dotenv.config();


mongoose.connect("mongodb+srv://adityakumar82:Akr8279@real-estate.misdn.mongodb.net/real-state?retryWrites=true&w=majority&appName=real-estate").then(()=>{
    console.log("DB connected")
}).catch((error)=>{
    console.log("error",error)
})
const app = express();
app.use(express.json());
const port = 3000;

app.use(cors());
app.listen(port,()=>{
    console.log(`server is ready ${port}`);
})

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
     const message = err.message || 'internal server err';
     return res.json({
        success: false,
        message
     }); 
})