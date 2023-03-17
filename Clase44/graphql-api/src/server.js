import express from "express";
import {buildSchema} from "graphql";
import {graphqlHTTP} from "express-graphql";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

//contruccion el esquema de graphql
const graphqlSchema = buildSchema(`
    type User{
        id:Int,
        nombre:String,
        apellido:String,
        telefono:String,
        correo:String
    }

    input UserInput{
        nombre:String,
        apellido:String,
        telefono:String,
        correo:String
    }

    type Query{
        getUsers: [User],
        getUserById(id:Int): User
    }

    type Mutation{
        addUser(user:UserInput): User,
        deleteUser(id:Int): String,
        updateUserById(id:Int, user:UserInput): User
    }
`);

let users=[];
//creamos la logica de los metodos "endpoints API REST"
const root = {
    getUsers:()=>{
        return users;
    },

    getUserById:({id})=>{
        const userFound = users.find(u=>u.id===id);
        if(!userFound){
            return null;
        } else {
            return userFound;
        }
    },

    addUser:({user})=>{
        let newId;
        if(!users.length){
            newId=1;
        } else {
            newId=users[users.length-1].id+1
        }
        const newUser={
            id:newId,
            nombre: user.nombre,
            apellido: user.apellido,
            telefono: user.telefono,
            correo: user.correo
        }
        users.push(newUser);
        return newUser;
    }
};

//enlazar el esquema y los metodos, y los exponemos en un unico endpoint
app.use("/graphql",graphqlHTTP({
    schema:graphqlSchema,
    rootValue:root,
    graphiql:true
}));

app.get("/product",(req,res)=>{
    res.json({title:"camisa", price:200})
});