// import express from "express";
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
// dotenv.config();

mongoose.connect("mongodb+srv://adityakumar82:Akr8279@real-estate.misdn.mongodb.net/real-state?retryWrites=true&w=majority&appName=real-estate").then(()=>{
    console.log("DB connected")
}).catch((error)=>{
    console.log("error",error)
})
const app = express();
 
const port = 3000;

app.listen(port,()=>{
    console.log(`server is ready ${port}`);
})