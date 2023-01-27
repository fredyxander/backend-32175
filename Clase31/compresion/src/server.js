import express from "express";
import compression from "compression";

const app = express();
// app.use(compression());//la compresion de manera general

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));


//routes
app.get("/saludo",(req,res)=>{
    res.send("hola que tal".repeat(10000))
});

app.get("/saludoZip",compression(),(req,res)=>{
    res.send("hola que tal".repeat(10000))
});