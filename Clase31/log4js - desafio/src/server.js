import express from "express";
import { logger } from "./logger/logger.js";

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>logger.info(`Server listening on port ${PORT}`));

app.get("/sumar", (req,res)=>{
    const {num1, num2}= req.query;
    if(!num1 || !num2){
        logger.error("El usuario no ingreso los numeros");
        res.send("Por favor ingresa los numeros");
    } else if(!Number.isInteger(parseInt(num1)) || !Number.isInteger(parseInt(num2))){
        logger.error("Datos invalidos");
        res.send("Datos invalidos");
    } else{
        logger.info("La suma fue realizada correctamente")
        res.send(`la suma es ${parseInt(num1) + parseInt(num2)}`);
    }
});