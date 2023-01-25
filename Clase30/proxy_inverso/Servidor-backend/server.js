const express = require("express");
const app = express();

// app.use(express.static("public"));

const MODO = process.argv[3] || "FORK";

if(cluster.isPrimary && MODO==="CLUSTER"){

} else{
    const PORT = process.argv[2] || 8080;
    app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
}

app.get("/perfil",(req,res)=>{
    res.send(`Servidor ejecutando en el puerto ${PORT} en el proceso ${process.pid}`)
});
