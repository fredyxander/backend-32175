const express = require("express");
const {Server} = require("socket.io");

const app = express();

app.use(express.static(__dirname+"/public"));

const server = app.listen(8080,()=>console.log("server listening on port 8080"));

//creacion del servidor websocket
const io = new Server(server) //conectar el websocket con el servidor principal

io.on("connection", (socket)=>{
    console.log("Un cliente o un socket nuevo se ha conectado", socket.id)
    //enviar data desde el servidor
    //              evento          datos o la info
    socket.emit("primerMensaje", "ya estas conectado")

    socket.on("msgCliente", (data)=>{
        console.log(data)
    })
})