const express = require("express");
const {Server} = require("socket.io");

const app = express();

app.use(express.static(__dirname+"/public"));

const server = app.listen(8080,()=>console.log("server listening on port 8080"));

//creacion del servidor websocket
const io = new Server(server) //conectar el websocket con el servidor principal

const chat = [];

io.on("connection", (socket)=>{
    console.log("¡Nuevo cliente conectado!", socket.id)

    // recibimios del cliente el evento 'tecla'
    // socket.on("tecla", (data)=>{
    //     console.log(data)
    // })

    socket.on("mensaje", (data)=>{
        chat.push({user:socket.id, msg:data});
        io.sockets.emit("mensajes", chat)
    })
})