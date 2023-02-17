import { ContenedorMongo } from "../../managers/ContenedorMongo.js";

class ProductosDaoMongo extends ContenedorMongo{
    constructor(model){
        super(model)
    }
}

export {ProductosDaoMongo}