import log4js from "log4js";

//configuracion de log4js para indicar donde vamos a almacenar y/o mostrar los registros.
log4js.configure({
    //definir la salida de los registros
    appenders:{
        //definir los tipos de salidas
        consola:{type:"console"},
        archivoErrores:{type:"file", filename:"./src/logs/errors.log"},
        //creamos salidas con niveles
        loggerConsola:{type:"logLevelFilter", appender:"consola", level:"info"},
        loggerErrores:{type:"logLevelFilter", appender:"archivoErrores", level:"error"},
    },
    categories:{
        default:{appenders:['loggerConsola','loggerErrores'],level:'all'},
        production:{appenders:['loggerErrores'], level:'all'}
    }
});


export const logger =log4js.getLogger();//vacio significa categoria default