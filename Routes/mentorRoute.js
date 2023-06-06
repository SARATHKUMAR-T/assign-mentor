import express from "express";
import mentor from "../Models/mentor.js";
import { student } from "../Models/student.js";

const router = express.Router();

// to create Mentor
router.post("/mentor", async (req, res) => {
  try {
    const mentee = await new mentor({
      ...req.body,
    }).save();
    res
      .status(200)
      .json({ message: "Mentor created Successfully", data: mentee });

    if (!mentee) {
      res.status(400).json({ message: "Unable to save the data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// for adding multiple students for a mentor
router.post("/addstudent", async (req, res) => {
  try {
    //  const newStudents=req.body.students

    const add = await mentor.findOneAndUpdate(
      { mentorName: req.body.mentorName },
      { $set: { students: req.body.students } },
      { new: true }
    );
    res.status(200).json({ message: "Students added successfully", data: add });

    if (!add) {
      res.status(400).json({ message: "unable to add students" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// changing mentor for particular student

router.post("/change", async (req, res) => {
  try {
    const newMentor = await student.findOneAndUpdate(
      { studentName: req.body.studentName },
      { $set: { currentMentor: req.body.currentMentor, mentorStatus: true } },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "mentor changed successfully", data: newMentor });
    if (!newMentor) {
      res.status(400).json({ message: "unable to change the mentor" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// show all students for particular mentor

router.get("/allstudents", async (req, res) => {
  try {
    const allStudents = await mentor.find({ mentorName: req.body.mentorName });
    res
      .status(200)
      .json({
        message: "data loaded successfully",
        students: allStudents[0].students,
      });
    if (!allStudents) {
      res.status(400).json({ message: "No students assigned for the mentor" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// previous mentor for particular student

router.get("/previous", async (req, res) => {
  try {
    const previousMentor = await student.find({
      studentName: req.body.studentName,
    });
    res
      .status(200)
      .json({
        message: "data loaded successfully",
        previousMentor: previousMentor[0].previousMentors,
      });
    if (!previousMentor) {
      res.status(400).json({ message: "No previous mentors" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export const mentorRouter = router;
