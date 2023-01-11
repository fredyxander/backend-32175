//importaciones
import express from "express";
import session from "express-session";
import handlebars from "express-handlebars";
import { dirname } from "path";
import {fileURLToPath} from "url";
import passport from "passport";
import {Strategy as LocalStrategy} from "passport-local";//usuario y contrasena
import {Strategy as TwitterStrategy} from "passport-twitter";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import { UserModel } from "./models/user.js";

//conexion a la base de datos
const URLDB = "mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/coderDB?retryWrites=true&w=majority";
mongoose.connect(URLDB,{
    useNewUrlParser:true,
    useUnifiedTopology: true
},(error)=>{
    if(error) console.log("Conexion fallida");
    console.log("base de datos conectada correctamente")
});

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
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/sessionsDB?retryWrites=true&w=majority"
    }),
    secret:"claveSecreta", //clave de encriptacion de la sesion
    //config para guardar en la memoria del servidor
    resave: true,
    saveUninitialized: true,
}));

//vinculacion de passport con el servidor
app.use(passport.initialize()); //inicializacion de passport
app.use(passport.session());

//config serializar y deserializar
//{id:1,name:"fredy",role:"admin"} -> {id:1}
passport.serializeUser((user, done )=>{
    return done(null,user.id)
});
passport.deserializeUser((id,done)=>{
    //con el id, vamos a buscar al usuario en la base de datos y obtener la info de ese usuario
    UserModel.findById(id,(error,userFound)=>{
        return done(error,userFound)
    })
});


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

//estrategia de registro de usuarios
passport.use("signupStrategy", new LocalStrategy(
    {
        passReqToCallback:true,
        usernameField:"email"
    },
    (req, username, password, done)=>{
        //buscamos si el usuario existe dentro de la base de datos
        UserModel.findOne({email:username},(err,userFound)=>{
            if(err) return done(err);
            if(userFound) return done(null,false,{message:"El usuario ya existe"})
            //creamos y guardamos al usuario en la base de datos
            const newUser = {
                name: req.body.name,
                email:username,
                password:password
            };
            UserModel.create(newUser,(err, userCreated)=>{
                if(err) return done(err,null,{message:"Hubo un error al registrar el usuario"})
                return done(null,userCreated)
            })
        })
    }
));

//login strategy con twitter
passport.use("loginTwitter", new TwitterStrategy(
    {
        //parametros para conectarme a la API de twitter
        consumerKey:"r3ip6le35xbLIj2tlr9YM5cGD",
        consumerSecret:"5cVyJNd4oupk3476qPSe2xezLExbhK8ihToQnpBr4cdNSLewCx",
        callbackURL:"http://localhost:8080/auth/twitter/callback"
    },
    (token, secretToken, profile,done)=>{
        console.log("profile", profile);
        //buscar si el usuario ya existe en la base de datos
        UserModel.findOne({email:profile.username},(err,userFound)=>{
            if(err) return done(err);
            if(userFound) return done(null,userFound, {message:"El usuario ya existe"});
            //si no existe entonces guardamos al usuario
            const newUser = {
                name:profile.displayName,
                email: profile.username,
                password:profile.id
            }
            UserModel.create(newUser,(err,userCreated)=>{
                if(err) return done(err);
                return done(null,userCreated)
            })
        })
    }
));


//rutas autenticacion
//registro de usuarios
app.post("/signup",passport.authenticate("signupStrategy",{
    failureRedirect:"/registro",
    failureMessage: true //req.sessions.messages=[]
}),
(req,res)=>{
    res.redirect("/perfil");
});

//login de usuarios
app.post("/login",(req,res)=>{
    // const {email, password} = req.body;
    // //validamos si el usuario existe
    // const userFound = users.find(elm=>elm.email === email);
    // if(userFound){
    //     //verificar la contrasena
    //     if(userFound.password === password){
    //         req.session.user=req.body;
    //         res.redirect("/perfil");
    //     } else{
    //         res.render("login",{error:"contrasena invalida"});
    //     }
    // } else {
    //     res.render("login",{error:"El usuario no existe, crea una cuenta"});
    // }
});

//login usando twitter
app.get("/auth/twitter",passport.authenticate("loginTwitter"));

app.get("/auth/twitter/callback", passport.authenticate("loginTwitter",{
    failureRedirect:"/inicio-sesion",
    failureMessage: true
}),(req,res)=>{
    res.redirect("/perfil")
});

//deslogueo usuario
app.get("/logout",(req,res)=>{
    // req.session.destroy(error=>{
    //     if(error) return res.send("Hubo un error al cerrar la sesion");
    //     res.redirect("/inicio-sesion");
    // });
});