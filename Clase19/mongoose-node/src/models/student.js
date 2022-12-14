import mongoose from "mongoose";

//defino la coleccion estudiantes
const studentCollection = "estudiantes";

//definir el esquema de cada uno de los documentos.
const studentSchema = new mongoose.Schema({
    //que propiedades va atener el documento estudiante.
    // nombre:String
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required:true
    },
    dni:{
        type: String,
        required: true,
        unique: true //evitar duplicados
    },
    curso:{
        type: String,
        required: true
    },
    nota:{
        type:Number,
        required:true
    },
    ingreso:Boolean,
});

//creamos el modelo para interactuar con la coleccion estudiantes
export const StudentModel = mongoose.model(studentCollection, studentSchema);