const {options} = require("../config/databaseConfig");
const knex = require("knex");

//crear instancia de la base de datos de mysql
const databaseMariadb = knex(options.mariaDB);
//crear instancia de la base de datos de sqlite
const databaseSqlite = knex(options.sqliteDB);

const createTables = async()=>{
    try {
        let productosTable = await databaseMariadb.schema.hasTable("productos");
        if(productosTable){
            await databaseMariadb.schema.dropTable("productos");
        }
        //creamos la tabla de productos
        await databaseMariadb.schema.createTable("productos",table=>{
            table.increments("id");
            table.string("title",40).nullable(false);
            table.integer("price").nullable(false);
            table.string("thumbnail",200).nullable(false);
        });
        console.log("tabla productos creada");

        let chatTable = await databaseSqlite.schema.hasTable("chat");
        if(chatTable){
            await databaseSqlite.schema.dropTable("chat");
        }
        await databaseSqlite.schema.createTable("chat", table=>{
            table.increments("id");
            table.string("user",30);
            table.string("timestamp", 20);
            table.string("message",200);
        });
        console.log("tabla chat creada");
    } catch (error) {
        console.log(error)
    }
    databaseMariadb.destroy();
    databaseSqlite.destroy();
}
createTables();