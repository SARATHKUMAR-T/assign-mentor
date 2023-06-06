import  express  from "express";
import dotenv from "dotenv"
import 'dotenv/config'
import dbConnect from "./db.js";
import { studentRouter } from "./Routes/studentRoute.js";
import { mentorRouter } from "./Routes/mentorRoute.js";

const app=express()

const PORT=process.env.PORT
console.log(PORT);

app.use(express.json())
dbConnect();


// student router

app.use("/api",studentRouter)

// mentor router
app.use("/api",mentorRouter)




app.listen(PORT,()=>console.log('server started successfully'))

