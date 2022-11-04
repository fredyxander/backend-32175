const express = require("express");
const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(express.static(__dirname+"/public"));

//configuramos el motor de plantillas
//definir donde estan mis archivos de las vistas.
app.set("views", __dirname + "/views");

//definimos con cual motor vamos a trabajar
app.set("view engine", "pug");

//definimos las rutas de las vistas
app.get("/home",(req,res)=>{
    res.render("welcome", {
        message:"curso backend"
    })
});

// /datos?min=10&nivel=15&max=20&titulo=<i>Medidor</i>
app.get("/datos",(req,res)=>{
    const {min, nivel,max,titulo} = req.query;
    res.render("medidor",{
        min: min,
        value:nivel,
        max:max,
        titulo:titulo
    })
})