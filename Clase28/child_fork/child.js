import {sumar} from "./sumar.js";
process.send("listo");

process.on("message",(parentMsg)=>{
    if(parentMsg == "Iniciar"){
        const resultado = sumar();
        //enviamos el resultado del proceso hijo al proceso padre
        process.send(resultado)
    }
});