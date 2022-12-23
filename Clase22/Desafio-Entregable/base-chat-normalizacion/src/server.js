import express from "express";
import {dbOptions} from "./config/dbConfig.js";
import {router as productRouter} from "./routes/products.js";
import handlebars from "express-handlebars";
import {Server} from "socket.io";
import path from "path";
import {fileURLToPath} from 'url';
import { normalize, schema } from "normalizr";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Manager clases
// const Contenedor = require("./managers/contenedorProductos");
import {Contenedor} from "./managers/contenedorProductos.js";
// const ContenedorChat = require('./managers/contenedorChat');
import {ContenedorChat} from "./managers/contenedorChat.js";
// const ContenedorSql = require("./managers/contenedorSql");
import { ContenedorSQL } from "./managers/contenedorSql.js";

// Services
// const productosApi = new Contenedor("productos.txt");
const productosApi = new ContenedorSQL(dbOptions.sqliteDB, "products");
const chatApi = new ContenedorChat("chat.txt");
// const chatApi = new ContenedorSQL(dbOptions.sqliteDB, "chat");

//server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

//configuracion template engine handlebars
app.engine(".hbs",handlebars.engine({extname: '.hbs'}));
app.set('views', __dirname+'/views');
app.set("view engine", ".hbs");


// routes
//api routes
app.use('/api/productos',productRouter);

//view routes
app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/productos',async(req,res)=>{
    res.render('products',{products: await productosApi.getAll()})
})


//NORMALIZACION
//1. Definir los esquemas.
const authorSchema = new schema.Entity("authors",{},{idAttribute:"email"});//id:con el valor del campo email.
const messageSchema = new schema.Entity("messages",
    {
        author:authorSchema
    }
);
//esquema global o padre
// const chat = {
//     id:"chatHistory",
//     messages:[], //<informacion del archivo chat.txtx>
// }
const chatSchema = new schema.Entity("chats", {
    messages: [messageSchema]
});
//2. Aplicar la normalizacion
//funcion que normaliza datos
const normalizarData = (data)=>{
    const dataNormalizada = normalize({id:"chatHistory", messages:data}, chatSchema);
    return dataNormalizada;
}
//3. Normalizar los mensajes
//funcion para normalizar los mensajes
const normalizarMensajes = async()=>{
    const messages = await chatApi.getAll();// messages = [{},{},{}];
    const normalizedMessages = normalizarData(messages);
    return normalizedMessages;
};


//express server
const server = app.listen(8080,()=>{
    console.log('listening on port 8080')
})



//websocket server
const io = new Server(server);

//configuracion websocket
io.on("connection",async(socket)=>{
    //PRODUCTOS
    //envio de los productos al socket que se conecta.
    io.sockets.emit("products", await productosApi.getAll())

    //recibimos el producto nuevo del cliente y lo guardamos con filesystem
    socket.on("newProduct",async(data)=>{
        await productosApi.save(data);
        //despues de guardar un nuevo producto, enviamos el listado de productos actualizado a todos los sockets conectados
        io.sockets.emit("products", await productosApi.getAll())
    })

    //CHAT
    //Envio de todos los mensajes al socket que se conecta.
    io.sockets.emit("messages", await normalizarMensajes());

    //recibimos el mensaje del usuario y lo guardamos en el archivo chat.txt
    socket.on("newMessage", async(newMsg)=>{
        // console.log("newMessage", newMsg)
        await chatApi.save(newMsg);
        io.sockets.emit("messages", await normalizarMensajes());
    });
});