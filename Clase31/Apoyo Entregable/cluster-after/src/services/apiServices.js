import {dbOptions} from "../config/dbConfig.js";

// Manager clases
// import {Contenedor} from "../managers/contenedorProductos.js";
import { ContenedorChat } from "../managers/contenedorChat.js";
import { ContenedorSQL } from "../managers/contenedorSql.js";

// Services
// const productosApi = new Contenedor("productos.txt");
export const productosApi = new ContenedorSQL(dbOptions.sqliteDB, "products");
export const chatApi = new ContenedorChat("chat.txt");
// const chatApi = new ContenedorSQL(dbOptions.sqliteDB, "chat");