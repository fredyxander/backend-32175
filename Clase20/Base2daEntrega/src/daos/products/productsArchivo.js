import { ContenedorArchivo } from "../../managers/ContenedorArchivo.js";

class ProductsDAOArchivos extends ContenedorArchivo{
    constructor(filepath){
        super(filepath); // new ContenedorArchivo()
    }
}

export {ProductsDAOArchivos};