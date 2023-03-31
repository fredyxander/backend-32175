import { Context, helpers } from "../../depts.ts";
import {User} from "../types/user.ts";

const users: User[]=[];

export const findUsers = (ctx:Context)=>{
    try {
        ctx.response.status = 200;
        ctx.response.body = {status:"success", data:users}
    } catch (error) {
        ctx.response.status = 401;
        ctx.response.body = `Hubo un error ${error}`;
    }
};

export const findUserById = (ctx:Context)=>{
    try {
        const {id} = helpers.getQuery(ctx,{mergeParams:true}); //req.params.id;
        const user = users.find((user:User)=>user.uid===id);
        ctx.response.status = 200;
        ctx.response.body = {status:"success", data:user};
    } catch (error) {
        ctx.response.status = 401;
        ctx.response.body = `Hubo un error ${error}`;
    }
};

export const createUser = async(ctx:Context)=>{
    try {
        const user = await ctx.request.body().value;
        users.push(user);
        ctx.response.status = 200;
        ctx.response.body = {status:"success", data:user, message:"user created"}
    } catch (error) {
        ctx.response.status = 401;
        ctx.response.body = `Hubo un error ${error}`;
    }
};