import express from "express";
import handlebars from "express-handlebars";
import {Server} from "socket.io";
import path from "path";
import {fileURLToPath} from 'url';
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import { dbOptions } from "./config/dbConfig.js";

import { productRouter } from "./routes/api/products.js";
import { clientRouter } from "./routes/web/clientRoutes.js";
import { authRouter } from "./routes/web/authRouter.js";
import { productsSocket } from "./routes/ws/products.js";
import { chatSocket } from "./routes/ws/chat.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

//Express server
const server = app.listen(8080,()=>{
    console.log('listening on port 8080')
})


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