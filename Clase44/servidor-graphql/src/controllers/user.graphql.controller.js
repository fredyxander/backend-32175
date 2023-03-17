import {buildSchema} from "graphql";
import {graphqlHTTP} from "express-graphql";
import { rootUsers } from "../services/user.graphql.service.js";

//contruccion el esquema de graphql
const graphqlSchema = buildSchema(`
    type User{
        _id:String,
        nombre:String,
        apellido:String,
        dni:Int,
        createdAt: String,
        updatedAt: String
    }

    input UserInput{
        nombre:String,
        apellido:String,
        dni:Int
    }

    type Query{
        getUsers: [User],
        getUserById(id:String): User
    }

    type Mutation{
        addUser(user:UserInput): User,
        deleteUser(id:String): String,
        updateUserById(id:String, user:UserInput): User
    }
`);

// graphqlHTTP({
//     schema:graphqlSchema,
//     rootValue:root,
//     graphiql:true
// })

export const graphqlController = ()=>{
    return graphqlHTTP({
        schema:graphqlSchema,
        rootValue:rootUsers,
        graphiql:true
    });
};