//importaciones
import express from "express";
import session from "express-session";
import handlebars from "express-handlebars";
import { dirname } from "path";
import {fileURLToPath} from "url";


//servidor express
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`));


//archivos estaticos
const __dirname = dirname(fileURLToPath(import.meta.url)); //ruta server.js
app.use(express.static(__dirname+"/public"));//ruta carpeta public


//motor de plantilla
//inicializar el motor de plantillas
app.engine(".hbs",handlebars.engine({extname: '.hbs'}));
//ruta de las vistas
app.set("views", __dirname+"/views");
//vinculacion del motor a express
app.set("view engine", ".hbs");


//interpretacion de formato json desde el cliente
app.use(express.json()); //lectura de json desde el cuerpo de la peticion.
app.use(express.urlencoded({extended:true})); //lectura de json desde un metodo post de formulario


//configuracion de la sesion
app.use(session({
    secret:"claveSecreta", //clave de encriptacion de la sesion
    //config para guardar en la memoria del servidor
    resave: true,
    saveUninitialized: true,
}));


//rutas asociadas a las paginas del sitio web
app.get("/",(req,res)=>{
    res.render("home")
});

app.get("/registro",(req,res)=>{
    res.render("signup")
});

app.get("/inicio-sesion",(req,res)=>{
    res.render("login")
});

app.get("/perfil",(req,res)=>{
    res.render("profile");
});

//rutas autenticacion
let users = [];

//registro de usuarios
app.post("/signup",(req,res)=>{
    // console.log(req.body);
    const {email} = req.body;
    const userFound = users.find(elm=>elm.email === email);
    if(userFound){
        res.render("signup",{error:"El usuario ya existe"})
    } else {
        users.push(req.body);
        req.session.user = req.body;
        res.redirect("/perfil");
    }
});

//login de usuarios
app.post("/login",(req,res)=>{
    const {email, password} = req.body;
    //validamos si el usuario existe
    const userFound = users.find(elm=>elm.email === email);
    if(userFound){
        //verificar la contrasena
        if(userFound.password === password){
            req.session.user=req.body;
            res.redirect("/perfil");
        } else{
            res.render("login",{error:"contrasena invalida"});
        }
    } else {
        res.render("login",{error:"El usuario no existe, crea una cuenta"});
    }
});

//deslogueo usuario
app.get("/logout",(req,res)=>{
    req.session.destroy(error=>{
        if(error) return res.send("Hubo un error al cerrar la sesion");
        res.redirect("/inicio-sesion");
    });
});