const express = require('express');
const handlebars = require("express-handlebars");
const path = require("path");

const viewsFolder = path.join(__dirname,"views")
// console.log(viewsFolder);

const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(express.static(__dirname+"/public"));

//vamos a inicializar nuestro motor de plantillas.
app.engine("handlebars",handlebars.engine());

//donde tengo las vistas en mi proyecto
app.set("views", viewsFolder);

//que motor de plantillas voy a utilizar
app.set("view engine", "handlebars");

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/contact",(req,res)=>{
    res.render("contacto")
})

let usuarios = [
    {name:"pedro", edad:23},
    {name:"pablo", edad:25},
    {name:"Maria", edad:33},
    {name:"Andres", edad:19},
]

app.get('/users', (req, res) => {
    res.render('usuarios',{
        people:usuarios,
        email:"fredy@gmail.com"
    })
})

let pokemones = [
    {name:"pikachu", edad:23},
    {name:"charizard", edad:25},
    {name:"miau", edad:33},
    {name:"Andres", edad:19},
]

app.get('/people', (req, res) => {
    res.render('usuarios',{
        people:pokemones
    })
})
