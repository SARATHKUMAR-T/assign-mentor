import express from "express";
import dotenv from "dotenv";
import "dotenv/config";
import dbConnect from "./db.js";
import { studentRouter } from "./Routes/studentRoute.js";
import { mentorRouter } from "./Routes/mentorRoute.js";
import { student } from "./Models/student.js";

// express intialization
const app = express();

// middleware
app.use(express.json());

// dbConnection
dbConnect();

// student router
app.use("/api", studentRouter);

// mentor router
app.use("/api", mentorRouter);

//Landing page api
app.use("/api", async (req, res) => {
  try {
 
    res.status(200).json({ message: "data loaded successfully,Use postman to send request"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// listening to port
app.listen(process.env.PORT, () => console.log("server started successfully"));
