// import { UserManager } from "../model/index.js";
import {getApiDao} from "../model/index.js";
import { options } from "../config/config.js";

const {UserManager,ProductManager} = await getApiDao(options.server.DB_TYPE);

class UserService{
    static async getUsers(){
        return await UserManager.getAll();
    }

    static async saveUser(body){
        return await UserManager.save(body)
    }

    static async getUser(id){
        return await UserManager.getById(id)
    }
};

export {UserService}