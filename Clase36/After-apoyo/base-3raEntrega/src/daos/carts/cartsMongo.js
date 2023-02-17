import { ContenedorMongo } from "../../managers/ContenedorMongo.js";

class CarritosDaoMongo extends ContenedorMongo{
    constructor(model){
        super(model)
    }
}

export {CarritosDaoMongo}