import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./config.js";

const PORT = options.server.PORT;

//crea la configuracion de la documentacion
const docOptions={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"documentacion usuarios",
            description:"crud de usuarios con express",
            version:"1.0.0"
        },
        servers:[{url:`http://localhost:${PORT}`}],//servidores que vamos a documentar
    },
    apis:['./src/docs/**/*.yaml']// ruta de losarchivos que contienen los esquemas y las rutas
};

//creamos una variable para intepreta esas definiciones de swagger
export const swaggerSpecs= swaggerJsDoc(docOptions);