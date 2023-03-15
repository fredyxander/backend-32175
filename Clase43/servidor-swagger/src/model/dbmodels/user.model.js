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
    },
    {
        timestamps:true
    }
);

export const UserModel = mongoose.model(userCollection,userSchema);