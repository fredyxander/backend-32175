import express from "express";
import {saludar} from "libreria-saludar-fredy";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

app.get("/hola",(req,res)=>{
    const {nombre} = req.query;
    const saludo = saludar(nombre);
    res.send(saludo);
});