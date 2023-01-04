import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import Redis from "ioredis";
import redisStrategy from "connect-redis";

const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

//crear cliente para conectarse a redis labs
const redisClient = new Redis({
    host: 'redis-19929.c8.us-east-1-4.ec2.cloud.redislabs.com',
    port: 19929,
    password: 'p3tYdq1xqx5m07i2jSLMBSQnKYMZdqx6'
});

const RedisStore = redisStrategy(session); //vinculacion de redis como store de las sessiones.

app.use(cookieParser());

//configuracion de la sesion
app.use(session({
    //store: tipo de almacenamiento->archivos
    store: new RedisStore({client:redisClient}),
    secret:"claveSecreta",
    //indicarle a la sesion si vamos a guardar en memoria o persistencia externa
    resave:false,
    saveUninitialized:false,
    // cookie:{
    //     maxAge:10000//tiempo de vida de la cookie
    // }
}));


app.get("/login",(req,res)=>{
    const {nombre} = req.query;
    if(req.session.username){ //si ya esta logueado redirige al home
        return res.send("ya estás logueado");
    }
    //si no esta logueado
    if(nombre){ //si envía el nombre se loguea y crea sesión para este usuario
        req.session.username = nombre;
        // console.log(req.session)
        res.send("login exitoso!");
    } else{
        res.send("Por favor ingresar nombre de usuario")
    }
})

app.get("/home", (req,res)=>{
    // console.log("home",req.session)
    if(req.session.username){
        let user = req.session.username;
        res.send(`Bienvenido ${user}`);
    } else{
        res.redirect("/login")
    }
});

app.get("/logout", (req,res)=>{
    req.session.destroy(error=>{
        if(!error) return res.send("logout exitoso")
        res.send(`Error:${error}`).status(500)
    })
});
