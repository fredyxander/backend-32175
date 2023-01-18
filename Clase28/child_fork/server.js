import express from "express";
import {sumar} from "./sumar.js";
import {fork} from "child_process";

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

let visitas = 0;
app.get("/",(req,res)=>{
    res.send(`Has vistado esta ruta ${visitas++} veces`)
});

app.get("/calculo-bloq",(req,res)=>{
    const resultado = sumar();
    res.send(`El resultado de la suma es ${resultado}`)
});

app.get("/calculo-nobloq",(req,res)=>{
    //creamos el proceso hijo
    const child = fork("child.js");
    child.on("message",(childMsg)=>{
        //notificacion de que el proceso hijo ya esta listo para funcionar.
        if(childMsg == "listo"){
            console.log("ready")
            child.send("Iniciar")
        } else{
            //recibiendo el resultado de operacion sumar
            res.send(`El resultado de la suma es ${childMsg}`)
        }
    })
});