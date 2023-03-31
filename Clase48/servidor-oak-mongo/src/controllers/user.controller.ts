import { Context, helpers, config, MongoClient, ObjectId } from "../../depts.ts";
import {User} from "../types/user.ts";

const {MONGO_URL,DATABASE_NAME} = config();

//conexion de mongo
const client = new MongoClient();
try {
    await client.connect(MONGO_URL);
    console.log("conexion a la base de datos exitosa!")
} catch (error) {
    console.log(error)
}

const db = client.database(DATABASE_NAME);///instancia de la base de datos
const userModel = db.collection<User>("users");

export const findUsers = async(ctx:Context)=>{
    try {
        const users = await userModel.find().toArray();
        ctx.response.status = 200;
        ctx.response.body = {status:"success", data:users}
    } catch (error) {
        ctx.response.status = 401;
        ctx.response.body = `Hubo un error ${error}`;
    }
};

export const findUserById = async(ctx:Context)=>{
    try {
        const {id} = helpers.getQuery(ctx,{mergeParams:true}); //req.params.id;
        const user = await userModel.findOne({_id: new ObjectId(id)});
        ctx.response.status = 200;
        ctx.response.body = {status:"success", data:user};
    } catch (error) {
        ctx.response.status = 401;
        ctx.response.body = `Hubo un error ${error}`;
    }
};

export const createUser = async(ctx:Context)=>{
    try {
        const body = await ctx.request.body().value;
        const userCreated = await userModel.insertOne(body);
        ctx.response.status = 200;
        ctx.response.body = {status:"success",data:userCreated, message:"user created"}
    } catch (error) {
        ctx.response.status = 401;
        ctx.response.body = `Hubo un error ${error}`;
    }
};