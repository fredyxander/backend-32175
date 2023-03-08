import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
            required:true
        },
        apellido:{
            type:String,
            required:true
        },
        dni:{
            type: Number,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
);

export const UserModel = mongoose.model(userCollection,userSchema);