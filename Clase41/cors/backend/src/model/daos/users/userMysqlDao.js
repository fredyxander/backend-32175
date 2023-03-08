import {MysqlContainer} from "../../managers/mysql.manager.js";

class UserMysqlDao extends MysqlContainer{
    constructor(tablename){
        super(tablename);
    }
}

export {UserMysqlDao}