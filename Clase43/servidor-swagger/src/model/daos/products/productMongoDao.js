import { MongoContainer } from "../../managers/mongo.manager.js";

class ProductMongoDao extends MongoContainer{
    constructor(model){
        super(model);
    }

    getProductsByCategory(){};
}

export {ProductMongoDao}