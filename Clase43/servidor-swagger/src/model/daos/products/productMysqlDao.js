import {MysqlContainer} from "../../managers/mysql.manager.js";

class ProductMysqlDao extends MysqlContainer{
    constructor(tablename){
        super(tablename);
    }
}

export {ProductMysqlDao}