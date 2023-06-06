import mongoose from "mongoose"




const studentSchema=new mongoose.Schema(
    {
        studentName:{
            type:String,
            required:true,
            trim:true
        },

        previousMentors:{
            type:Array,
            
        },

        mentorStatus:{
            type:Boolean,
        },

        currentMentor:{
            type:String,
            trim:true
            
        }
    }
)


const student=mongoose.model('student',studentSchema)

export {student}