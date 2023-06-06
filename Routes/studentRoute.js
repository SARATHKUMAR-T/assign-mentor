import express from "express";
import { student } from "../Models/student.js";

const router = express.Router();

// to create Student
router.post("/student", async (req, res) => {
  try {
    const data = await new student({
      ...req.body,
    }).save();

    res.status(200).json({
      message: "Student saved successfully",
      data: data,
    });

    if (!data) {
      res.status(400).json({
        message: "error in saving",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export const studentRouter = router;
