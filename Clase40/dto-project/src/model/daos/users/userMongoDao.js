import { MongoContainer } from "../../managers/mongo.manager.js";

class UserMongoDao extends MongoContainer{
    constructor(model){ // new UserMongoDao(model)
        super(model); // remplazar new MongoContainer(model)
    }

    getUsersByRole(){};
}

export {UserMongoDao}