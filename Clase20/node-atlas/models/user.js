import mongoose from "mongoose";

//crear la coleccion donde vamos a almacenar la informacion
const userCollection = "usuarios";

//crear el esquema asociado a cada documento
const userSchema = new mongoose.Schema(
    {
        nombre:String,
        apellido: String,
        dni: String
    }
);

//crear el modelo
export const UserModel = mongoose.model(userCollection,userSchema);