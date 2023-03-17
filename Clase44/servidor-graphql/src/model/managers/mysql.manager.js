class MysqlContainer{
    constructor(tablename){
        this.tablename = tablename;
    }

    async getById(id){}

    async getAll(){}

    async save(object){}

    async updateById(body, id){}

    async deleteById(id){}

    async deleteAll(){}
}

export {MysqlContainer};