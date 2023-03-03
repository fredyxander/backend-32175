import dotenv from "dotenv";
import ParsedArgs from "minimist";

dotenv.config(); //process.env

//configuracion de los argumentos desde la terminal recibidos con minimist
// console.log(process.argv)
const objArgs = ParsedArgs(process.argv.slice(2), {
    alias:{
        p:"port",
        m:"mode",
        e:"env"
    },
    default:{
        port:8080,
        mode:"FORK",
        env:"DEV"
    }
});
// console.log(objArgs)

//CREAMOS EL OBJETO GLOBAL que contiene las configuraciones que necesitamos en el proyecto
export const options = {
    server:{
        PORT:objArgs.port,
        MODE:objArgs.mode,
        NODE_ENV:objArgs.env,
        DB_TYPE: process.env.DB_TYPE || "mongo"
    },
    mongo:{
        url:process.env.MONGO_URL
    },
    mysql:{},
    twilio:{}
};
