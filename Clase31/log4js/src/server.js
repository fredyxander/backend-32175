import express from "express";
import log4js from "log4js";

const app = express();

//configuracion de log4js
log4js.configure({
    appenders:{
        //definir las salidas de datos->como mostrar y almacenar los registros
        consola:{type:"console"},//los mensajes se muestran por consola
        archivo:{type:"file",filename:"./src/logs/prueba.txt"}
    },
    categories:{
        default:{appenders:['consola', 'archivo'], level:'warn'},
        pruebaArchivo:{appenders:['archivo'], level:'warn'}
    }
});

//definir la categoria que vamos a utilizar para los mensajes(logs)
const logger = log4js.getLogger();//logger va a remplazar console

logger.fatal("imprimendo nivel fatal");
logger.trace("imprimendo nivel trace");
logger.debug("imprimendo nivel debug");
logger.info("imprimendo nivel info");
logger.warn("imprimendo nivel warn");
logger.error("imprimendo nivel error");
logger.fatal("imprimendo nivel fatal");

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));
