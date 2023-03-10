import express from "express";
import handlebars from "express-handlebars";
import path from "path";
import cors from "cors";

import { options } from "./config/config.js";
import __dirname from "./utils.js";
import { apiRouter } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

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

export {app};
