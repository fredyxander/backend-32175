import express from "express";
import handlebars from "express-handlebars";
import {Server} from "socket.io";
import path from "path";
import {fileURLToPath} from 'url';
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import ParsedArgs from "minimist";
import cluster from "cluster";
import os from "os";

import { dbOptions } from "./config/dbConfig.js";
import __dirname from "./util.js";

import { productRouter } from "./routes/api/products.js";
import { clientRouter } from "./routes/web/clientRoutes.js";
import { authRouter } from "./routes/web/authRouter.js";
import { productsSocket } from "./routes/ws/products.js";
import { chatSocket } from "./routes/ws/chat.js";

//configuracion de recepcion de argumentos
const options = {alias:{p:"port", m:"modo"}, default:{modo:"FORK", port:8080}};
const objArguments = ParsedArgs(process.argv.slice(2), options);
const PORT = objArguments.port;
const MODO = objArguments.modo;


//Express server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

//Configuracion template engine handlebars
app.engine(".hbs",handlebars.engine({extname: '.hbs'}));
app.set('views', __dirname+'/views');
app.set("view engine", ".hbs");

app.use(cookieParser());
//confiugracion de session
app.use(session({
    store: MongoStore.create({
        mongoUrl: dbOptions.mongoAtlasSessions.urlDatabase
    }),
    secret:"claveSecreta",
    //indicamos un almacenamiento externo
    resave: false,
    saveUninitialized: false
}));


// Server routes
// Api routes
app.use('/api/productos',productRouter);
//view routes
app.use(clientRouter);
app.use(authRouter);


//logica del cluster
if(MODO === "CLUSTER" && cluster.isPrimary){
    const numCpus =os.cpus().length;
    console.log(`Numero de nucleos en el procesador: ${numCpus}`);
    for(let i=0;i<numCpus;i++){
        cluster.fork();
    }
    cluster.on('exit',(worker)=>{
        console.log(`El proceso ${worker.process.pid} ha dejado de funcionar`);
        cluster.fork();
    });

} else {

    //Express server
    const server = app.listen(PORT,()=>{
        console.log(`Listening on port ${PORT} on process ${process.pid}`)
    });

    //Websocket server
    const io = new Server(server);
    //configuracion websocket
    io.on("connection",async(socket)=>{
        // console.log('Nuevo cliente conectado!');
        //PRODUCTOS
        productsSocket(socket, io.sockets);
        //CHAT
        chatSocket(socket, io.sockets);
    });
}
