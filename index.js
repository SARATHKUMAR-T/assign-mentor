import  express  from "express";
import dotenv from "dotenv"
import 'dotenv/config'
import dbConnect from "./db.js";
import { studentRouter } from "./Routes/studentRoute.js";
import { mentorRouter } from "./Routes/mentorRoute.js";


// express intialization
const app=express()


// middleware
app.use(express.json())

// dbConnection
dbConnect();


// student router
app.use("/api",studentRouter)

// mentor router
app.use("/api",mentorRouter)


// listening to port
app.listen(process.env.PORT,()=>console.log('server started successfully'))

