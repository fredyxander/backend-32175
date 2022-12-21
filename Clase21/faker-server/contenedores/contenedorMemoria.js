import {faker} from "@faker-js/faker";
const {datatype} = faker;

class ContenedorMemoria{
    constructor(){
        this.users = [];
    }

    getAll(){
        return this.users;
    }

    save(user){
        //{nombre,apellido, imagen,correo}
        user.id = datatype.uuid();
        this.users.push(user);
        return `nuevo usuario agregado ${user.id}`;
    }

    deleteById(id){
        let index = this.users.findIndex(elm=>elm.id === id);
        //[1,2,3,"a","b"]
        this.users.splice(index,1);
        return `usuario eliminado con el id ${id}`;
    }
}

export {ContenedorMemoria}