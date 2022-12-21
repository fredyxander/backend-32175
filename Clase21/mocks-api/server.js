import express from "express";
const app = express();

app.listen(8080,()=>console.log("server listening"));

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana','Pedro'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta','morado'];

app.get("/usuarios",(req,res)=>{
    let users =[];
    for(let i =0;i<10;i++){
        users.push(
            {
                nombre: nombres[parseInt(Math.random()*nombres.length)], //nombre[0-4]
                apellido: apellidos[parseInt(Math.random()*apellidos.length)],
                color: colores[parseInt(Math.random()*colores.length)],
            }
        )
    }
    res.send(users);
});