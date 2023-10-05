import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    address: { type: String },
    password: { type: String },
})
export const userModel = mongoose.models.User || mongoose.model("User", userSchema);
