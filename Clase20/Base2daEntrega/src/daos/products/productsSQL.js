import { ContenedorMysql } from "../../managers/ContenedorMysql.js";

class ProductsDaoSQL extends ContenedorMysql{
    constructor(options,tableName){
        super(options,tableName);
    }
};

export {ProductsDaoSQL};