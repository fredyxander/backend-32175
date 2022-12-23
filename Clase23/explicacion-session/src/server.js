import express from "express";
import session from "express-session";

const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

//configuracion las sesiones del lado del servidor
app.use(session({
    //clave de encriptacion de la informacion
    secret:"claveSecreta",

    //donde vamos a almacenar las sesiones, sesiones en memoria
    resave:true,
    saveUninitialized:true,

    //configurar cookie de la sesion
    // cookie:{
    //     maxAge: 20000 //10seg
    // }
}));


app.get("/login",(req,res) => {
    const {nombre} = req.query;
    if(req.session.username){
        res.redirect("/perfil")
    } else {
        if(nombre){
            req.session.username = nombre;
            res.send("sesion inciada");
        } else {
            res.send("por favor ingresa un nombre")
        }
    }
});

app.get("/perfil", (req,res)=>{
    console.log(req.session)
    if(req.session.username){
        res.send(`Bienvenido ${req.session.username}`)
    } else {
        res.redirect("/login")
    }
});

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("sesion finalizada");
});