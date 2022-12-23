import express from "express";
import cookieParser from "cookie-parser";

const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(cookieParser("claveUltraSecreta"));//servidor vinculado a las cookies.

//creacion de cookies
app.get("/set-cookie1", (req,res)=>{
    res.cookie("galleta1","oreo").send("galleta 1 creada")
});

//cookie con tiempo de vida
app.get("/set-cookie2", (req,res)=>{
    res.cookie("galleta2","ritz",{maxAge:10000}).send("galleta con tiempo de vida creada");
});

//leer las cookies
app.get("/cookies",(req,res)=>{
    // console.log(req.cookies);
    res.send(req.cookies)
});

app.get("/cookiesFirmadas",(req,res)=>{
    res.send(req.signedCookies);
})

//borrar las cookies
app.get("/delete",(req,res)=>{
    res.clearCookie("galleta1").send("sesion finalizada")
});

app.get("/login",(req,res)=>{
    res.cookie("login-info",{nombre:"pepe",rol:"lector"},{signed:true}).send("sesion iniciada")
});