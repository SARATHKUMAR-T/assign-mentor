import mongoose from "mongoose";


export default function dbConnect(){
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }

    try {
       mongoose.connect('mongodb+srv://sarath:sara98@mentor.tk4revg.mongodb.net/?retryWrites=true&w=majority',params) 
       console.log('atlas connected successfully');
    } catch (error) {
        console.log("error connecting atlas");
    }
}