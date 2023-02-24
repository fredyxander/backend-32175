import mongoose from "mongoose";
import { options } from "./options.js";

export const connectMongoDB = ()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(options.mongo.url,(err)=>{
        if(err) return console.log(`Hubo un error al conectarse a la base de datos ${err}`);
        console.log("base de datos conectada")
    })
};