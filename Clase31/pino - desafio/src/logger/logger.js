import pino from "pino";
import { envConfig } from "../envConfig.js";

//configuracion con pino
const loggerProd = pino("./src/logs/errores.log");
loggerProd.level ="error";

const loggerDev = pino();//mostramos mensajes por consola
loggerDev.level = "info";

let logger = null;
if(envConfig.NODE_ENV === "production"){
    logger = loggerProd;
} else{
    logger = loggerDev;
};

export {logger};