// import { UserManager } from "../model/index.js";
import {getApiDao} from "../model/index.js";
import { options } from "../config/config.js";
import {convertUserToDto} from "../model/dtos/user.dto.js";
import { UserValidation } from "../model/validations/user.validation.js";

const {UserManager, ProductManager} = await getApiDao(options.server.DB_TYPE);

class UserService{
    static async getUsersDTO(){
        const users = await UserManager.getAll();
        // console.log("users", users);
        const usersDto = convertUserToDto(users);
        // console.log("usersDto",usersDto)
        return usersDto;
    }

    static async getUsers(){
        const users = await UserManager.getAll();
        return users;
    }

    static async saveUser(body){
        try {
            UserValidation.validateUser(body,true,10); //validamos la informacion del usuario
            return await UserManager.save(body); //procedemos al guardar al usuario en la db
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getUser(id){
        const user = await UserManager.getById(id);
        const userDto = convertUserToDto(user);
        return userDto;
    }

    static async deleteUserById(id){
        return await UserManager.deleteById(id);
    }
};

export {UserService}