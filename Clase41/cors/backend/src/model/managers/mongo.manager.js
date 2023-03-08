class MongoContainer{
    constructor(model){
        this.model = model;
    }

    async getById(id){
        try {
            const data = await this.model.findById(id);
            const response = JSON.parse(JSON.stringify(data));
            return response;
        } catch (error) {
            throw new Error(`Hubo un error ${error}`)
        }
    }

    async getAll(){
        try {
            const data = await this.model.find();
            const response = JSON.parse(JSON.stringify(data));
            return response;
            return response;
        } catch (error) {
            throw new Error(`Error get all ${error}`);
        }
    }

    async save(object){
        try {
            const data = await this.model.create(object);
            const response = JSON.parse(JSON.stringify(data));
            return response;
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`);
        }
    }

    async updateById(body, id){
        try {
            const data = await this.model.findByIdAndUpdate(id, body,{new:true});
            const response = JSON.parse(JSON.stringify(data));
            return response;
        } catch (error) {
            throw new Error(`Error al actualizar: no se encontró el id ${id}`);
        }
    }

    async deleteById(id){
        try {
            await this.model.findByIdAndDelete(id);
            return "delete successfully";
        } catch (error) {
            throw new Error(`Error al borrar: no se encontró el id ${id}`);
        }
    }

    async deleteAll(){
        try {
            await this.model.delete({});
            return "delete successfully";
        } catch (error) {
            throw new Error(`Error al borrar todo: ${error}`);
        }
    }
}

export {MongoContainer};