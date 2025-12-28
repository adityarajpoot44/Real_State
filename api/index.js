import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from "./routes/auth.route.js";
import dataRouter from './routes/data.route.js';
import cors from 'cors';
import cookieParser from "cookie-parser";
dotenv.config();


mongoose.connect("mongodb+srv://adityakumar82:Akr8279@real-estate.misdn.mongodb.net/real-state?retryWrites=true&w=majority&appName=real-estate").then(()=>{
    console.log("DB connected")
}).catch((error)=>{
    console.log("error in DB",error)
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials: true, origin: true, withCredentials: true , origin: "http://localhost:3001"}))
app.use(cookieParser());
app.use("/temp", express.static("public/temp"));

const port = 3000;

app.listen(port,()=>{
    console.log(`server is readys ${port}`);
})


app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/data',dataRouter);

app.use((err,req,res,next)=>{
     const message = err.message || 'internal server err';
     return res.json({
        success: false,
        message
     }); 
})