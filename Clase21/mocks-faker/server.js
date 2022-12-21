import express from "express";
import {faker} from "@faker-js/faker";
const {name, vehicle, internet} = faker;
faker.locale="es";

const app = express();

app.listen(8080,()=>console.log("server listening"));


app.get("/usuarios",(req,res)=>{
    let users =[];
    for(let i =0;i<1000;i++){
        users.push(
            {
                nombre: name.firstName(),
                apellido: name.lastName(),
                color: vehicle.color(),
                correo: internet.email(),
            }
        )
    }
    res.send(users);
});