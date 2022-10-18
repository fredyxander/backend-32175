const fs = require("fs");

fs.readFile("./informacion.txt","utf-8",(err,respuesta)=>{
    if(err){
        console.log("El archivo no esta disponible")
    } else{
        console.log(respuesta)
    }
})

fs.readFile("./archivo.txt","utf-8",(err,respuesta)=>{
    if(err){
        console.log("El archivo no esta disponible")
    } else{
        console.log(respuesta)
    }
})