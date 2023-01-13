import express from "express";
import { envConfig } from "./envConfig.js";

const app = express();
// console.log(process.env)
const PORT = envConfig.PORT;
app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`));

//creacion de variables de entorno del sistema
//MAC Y LINUX
// set NODE_ENV=development

//windows
// set "NODE_ENV=development"