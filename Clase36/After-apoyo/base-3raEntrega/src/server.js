import express from "express";
import { logger } from "./loggers/logger.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import {options} from "./config/databaseConfig.js";
import passport from "passport";

import { cartsRouter } from "./routes/carritos.js";
import { productsRouter } from "./routes/products.js";
import { authRouter } from "./routes/auth.js";


// instancia servidor express
const app = express();

// configuracion servidor
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//configuracion de session
app.use(session({
    //store define el almacenamiento de las sesiones delos usuarios
    store:MongoStore.create({
        mongoUrl:options.mongoDB.url
    }),
    secret:"claveSecreta",
    //definimos resave y saveunitialize en false para indicar que vamos a usar almacenamiento externo
    resave:false,
    saveUninitialized:false
}));

//configuracion de passport
app.use(passport.initialize()); //inicializamos passport
app.use(passport.session());

//router productos y carritos
app.use('/api/productos', productsRouter);
app.use('/api/carritos', cartsRouter);
app.use("/api/auth", authRouter);

// Ejecucion del servidor
const PORT = 8080;
const server = app.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
});

logger.error("registro de error de prueba");
server.on('error', error => logger.error(`Error in server ${error}`));
