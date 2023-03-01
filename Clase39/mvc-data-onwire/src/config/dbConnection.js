import mongoose from "mongoose";
import { options } from "./config.js";

export const connectMongoDB = async()=>{
    try {
        await mongoose.connect(options.mongo.url);
        console.log("base de datos conectada")
    } catch (error) {
        console.log(`Hubo un error al conectarse a la base de datos ${err}`)
    }
};