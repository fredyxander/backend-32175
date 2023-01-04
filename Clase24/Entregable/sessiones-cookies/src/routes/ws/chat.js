import { normalizarMensajes } from "../../utils/normalize.js";
import { chatApi } from "../../services/apiServices.js";

export const chatSocket = async(socket, sockets)=>{
    //Envio de todos los mensajes al socket que se conecta.
    sockets.emit("messages", await normalizarMensajes());

    //recibimos el mensaje del usuario y lo guardamos en el archivo chat.txt
    socket.on("newMessage", async(newMsg)=>{
        await chatApi.save(newMsg);
        sockets.emit("messages", await normalizarMensajes());
    });
};