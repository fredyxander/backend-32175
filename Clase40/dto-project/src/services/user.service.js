// import { UserManager } from "../model/index.js";
import {getApiDao} from "../model/index.js";
import { options } from "../config/config.js";
import {convertUserToDto} from "../model/dtos/user.dto.js";

const {UserManager,ProductManager} = await getApiDao(options.server.DB_TYPE);

class UserService{
    static async getUsers(){
        const users = await UserManager.getAll();
        // console.log("users", users);
        const usersDto = convertUserToDto(users);
        // console.log("usersDto",usersDto)
        return usersDto;
    }

    static async saveUser(body){
        return await UserManager.save(body)
    }

    static async getUser(id){
        const user = await UserManager.getById(id);
        const userDto = convertUserToDto(user);
        return userDto;
    }
};

export {UserService}