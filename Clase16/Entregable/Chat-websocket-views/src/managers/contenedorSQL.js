const knex = require("knex");

// const database = knex(options)

class ContenedorSQL{
    constructor(options, tableName){
        this.database = knex(options);
        this.table = tableName;
    }

    async getAll(){
        try {
            //obtenemos los registros de la tabla
            const response = await this.database.from(this.table).select("*");
            return response;
        } catch (error) {
            return `Hubo un error ${error}`;
        }
    }

    // {
    //     title:"",
    //     price:10,
    //     thumbnail:""
    // }
    async save(object){
        try {
            const [id] = await this.database.from(this.table).insert(object);
            return `save successfully with id ${id}`;
        } catch (error) {
            return `Hubo un error ${error}`;
        }
    }
}

module.exports = {ContenedorSQL};