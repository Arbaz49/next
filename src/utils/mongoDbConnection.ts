import mongoose from "mongoose"

export const makeConnectionToDb=()=>{
    mongoose.connect("mongodb+srv://arbaz24320:arbaz6098@cluster0.mhaazh1.mongodb.net/nodeLearning?retryWrites=true&w=majority").then(()=>{
        console.log("connected to mongoDb")
    }).catch((err)=>{
        console.log("error occurred",err)
    })
}