import mongoose from "mongoose";
import { UserModel } from "./models/user.js";

mongoose.connect("mongodb+srv://fredy:coder@coder32175.zh515qj.mongodb.net/ecommerce?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology: true
},error=>{
    if(error) return console.log("hubo un error al conectarse");
    console.log("conexion exitosa")
});

const operacionesCRUD = async()=>{
    let users = await UserModel.find();
    console.log(users);

    //insert one
    await UserModel.create({nombre: 'Federico', apellido: 'Perez', dni: '320118321'});
    console.log("user created");
}
operacionesCRUD();