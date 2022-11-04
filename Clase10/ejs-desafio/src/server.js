const express = require("express");
const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(express.static(__dirname+"/public"));

//interpretar la informacion de tipo json que venga a traves de una solicitud
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

const usuarios = [];

app.get("/",(req,res)=>{
    res.render("home", {
        users:usuarios
    })
})

app.post("/personas", (req,res)=>{
    console.log(req.body);
    usuarios.push(req.body);
    res.redirect("/") //redigimos al usuario a la ruta /
})