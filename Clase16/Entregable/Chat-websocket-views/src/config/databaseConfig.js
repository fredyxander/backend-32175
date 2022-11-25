const path = require("path");

const options = {
    mariaDB: {
        client:"mysql",
        connection:{
            host:"127.0.0.1",
            user:"root",
            password:"",
            database:"corderhousedb"
        }
    },
    sqliteDB:{
        client:"sqlite",
        connection:{
            filename:path.join(__dirname, "../DB/chatdb.sqlite")
        },
        useNullAsDefault:true
    }
}

module.exports = {options};