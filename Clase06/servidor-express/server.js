//1. importar express
const express = require("express");

//2.crear el servidor
const app = express();

//3.levantar el servidor.
app.listen(8080,()=>console.log("server listening on port 8080"));

//rutas o endpoints
//ruta para obtener un mensaje de texto.
app.get("/",(request, response)=>{
    response.send("solicitud a la ruta principal")
})

app.get("/user",(request, response)=>{
    response.json({nombre:"pepito", edad:30})
})