import winston, {transports} from "winston";
import { envConfig } from "../envConfig.js";

//configuracion del logger utilizando winston
const loggerProd = winston.createLogger({
    transports:[
        //donde se almacena los mensajes y desde que nivel
        new transports.File({filename:"./src/logs/debug.log",level:"debug"}),
        new transports.File({filename:"./src/logs/errores.log", level:"error"})
    ]
});

const loggerDev = winston.createLogger({
    transports:[
        new transports.Console({level:"info"})
    ]
});

let logger = null;
if(envConfig.NODE_ENV === "production"){
    logger = loggerProd;
} else{
    logger = loggerDev;
};

export {logger};