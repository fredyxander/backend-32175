import { productosApi } from "../../services/apiServices.js";

export const productsSocket = async(socket, sockets)=>{
    sockets.emit("products", await productosApi.getAll());

    //recibimos el producto nuevo del cliente y lo guardamos con filesystem
    socket.on("newProduct",async(data)=>{
        await productosApi.save(data);
        //despues de guardar un nuevo producto, enviamos el listado de productos actualizado a todos los sockets conectados
        sockets.emit("products", await productosApi.getAll());
    })
};