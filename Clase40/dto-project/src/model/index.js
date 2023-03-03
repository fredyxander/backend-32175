// import { MongoContainer } from "./managers/mongo.manager.js";
// import {UserModel} from "./dbmodels/user.model.js";

// export const UserManager = new MongoContainer(UserModel);

//Creacion de la fabrica
import {UserModel} from "./dbmodels/user.model.js";
import {ProductModel} from "./dbmodels/product.model.js";
import { MyMongoClient } from "./clients/dbClientMongo.js";
import { options} from "../config/config.js";


export async function getApiDao(dbType){
    let UserManager;
    let ProductManager;
    switch (dbType) {
        case "mysql":
            const {ProductMysqlDao} = await import("./daos/products/productMysqlDao.js");
            const {UserMysqlDao} = await import("./daos/users/userMysqlDao.js");
            ProductManager = new ProductMysqlDao("products");
            UserManager = new UserMysqlDao("users");
            break;
        case "mongo":
            const {ProductMongoDao} = await import("./daos/products/productMongoDao.js");
            const {UserMongoDao} = await import("./daos/users/userMongoDao.js");
            //conectar la base de datos
            const myClient = new MyMongoClient();
            await myClient.connect(options.mongo.url);
            ProductManager = new ProductMongoDao(ProductModel);
            UserManager = new UserMongoDao(UserModel);
            break;
        default:
            break;
    }
    return {UserManager,ProductManager}
};