import log4js from "log4js";
import { envConfig } from "../envConfig.js";

log4js.configure({
    appenders:{
        //definimos las salidas
        consola:{type:"console"},
        errores:{type:"file",filename:"./src/logs/errores.log"},
        debug:{type:"file",filename:"./src/logs/debug.log"},
        //definir una salida con un nivel
        consolaInfo:{type:'logLevelFilter',appender:'consola', level:'info'},
        consolaError:{type:'logLevelFilter', appender:'consola', level:'error'},
        archivoDebug:{type:'logLevelFilter',appender:'debug', level:'debug'},
        archivoErrores:{type:'logLevelFilter', appender:'errores', level:'error'}
    },
    categories:{
        default:{appenders:['consolaInfo'], level:'all'},
        prod:{appenders:['archivoDebug','archivoErrores'],level:'all'}
    }
});

let logger = null;
if(envConfig.NODE_ENV === "production"){
    logger = log4js.getLogger('prod');//categoria prod
} else{
    logger = log4js.getLogger();//catagoria default
};

export {logger};