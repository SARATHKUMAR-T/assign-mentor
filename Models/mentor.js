import mongoose from "mongoose"

const mentorSchema=new mongoose.Schema({
    mentorName:{
        type:String,
        required:true,
        trim:true
    },

    students:{
        type:Array,
    }
})


const mentor=mongoose.model('mentor',mentorSchema)

export default mentor