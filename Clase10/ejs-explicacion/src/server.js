const express = require("express");
const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(express.static(__dirname+"/public"));

//configurar el motor de plantillas
app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render("welcome",{
        message:"curso backend"
    })
});

app.get("/contact", (req,res)=>{
    res.render("contact")
})