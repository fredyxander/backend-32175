import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";

import { options } from "./config/config.js";
import __dirname from "./utils.js";
import { apiRouter } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configuración de session
app.use(session({
    store:MongoStore.create({
        mongoUrl:options.mongo.url
    }),
    secret: options.server.SECRET_SESSION,
    resave:false,
    saveUninitialized:false
}));

//configuración de passport
app.use(passport.initialize());
app.use(passport.session());

//configurar nuestro motor de plantillas
app.engine("hbs",handlebars.engine({extname:".hbs"}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");

app.use(cors({
    origin: process.env.NODE_ENV === "PROD" ? "WWW.MIPAGINAWEB.COM" : "http://localhost:3000"
}));

app.use(apiRouter);

const PORT = options.server.PORT;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
