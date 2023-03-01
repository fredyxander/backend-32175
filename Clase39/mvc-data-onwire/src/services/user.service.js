import { UserManager } from "../model/index.js";

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