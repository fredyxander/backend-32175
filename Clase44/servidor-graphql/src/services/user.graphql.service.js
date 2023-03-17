import {getApiDao} from "../model/index.js";
import { options } from "../config/config.js";

const {UserManager} = await getApiDao(options.server.DB_TYPE);

//definimos metodos
export const rootUsers = {
    getUsers:async()=>{
        return await UserManager.getAll();
    },

    getUserById:({id})=>{},

    addUser:({user})=>{}
};