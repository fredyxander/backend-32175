import path from "path";
import __dirname from "../util.js";

export const dbOptions = {
    mariaDB:{
        client:"mysql",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:"",
            database:"coderhousedb"
        }
    },
    sqliteDB:{
        client:"sqlite3",
        connection:{
            filename: path.join(__dirname, "/DB/sqliteDB.sqlite")
        },
        useNullAsDefault:true
    },
    mongoAtlasSessions:{
        urlDatabase: "mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/sessionsDB?retryWrites=true&w=majority"
    }
}
