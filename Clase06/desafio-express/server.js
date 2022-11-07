const express = require("express");
const Contenedor = require("./contenedor");

const app = express();

const PORT = 8080;

app.listen(PORT,()=>console.log(`server listeing on port ${PORT}`));

const contenedorProductos = new Contenedor("productos.txt");

app.get("/",async(req,res)=>{
    res.send("<h1 style='color:blue'>Bienvenidos al servidor express</h1>")
});

let visitas = 0;
app.get("/visitas",(req,res)=>{
    visitas++;
    res.send(`La cantidad de visitas es ${visitas}`)
})

app.get("/fredy",(req,res)=>{
    res.send(`Bienvenido fredy!`)
})