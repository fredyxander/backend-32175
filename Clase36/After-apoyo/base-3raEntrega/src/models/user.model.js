import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    //propiedades del documento usuario
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    direccion:{
        type:String
    }, //direccion:String
    edad:{
        type:Number,
        required:true
    },
    celular:{
        type:String,
        required:true
    },
    avatar:String
});

export const UserModel = mongoose.model(userCollection, userSchema);