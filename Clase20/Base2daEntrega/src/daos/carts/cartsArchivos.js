import { ContenedorArchivo } from "../../managers/ContenedorArchivo.js";

class CartsDAOArchivos extends ContenedorArchivo{
    constructor(filepath){
        super(filepath); // new ContenedorArchivo()
    }
}

// const instancia = new CartsDAOArchivos("./carts.txt")
export {CartsDAOArchivos};