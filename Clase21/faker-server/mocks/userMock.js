import { ContenedorMemoria } from "../contenedores/contenedorMemoria.js";
import {faker} from "@faker-js/faker";
const {name,datatype,internet,image} = faker;

class UserMock extends ContenedorMemoria{
    constructor(){
        super();
    }

    populate(cant){
        let newUsers =[];
        for(let i =0;i<cant;i++){
            newUsers.push(
                {
                    id: datatype.uuid(),
                    nombre: name.firstName(),
                    apellido: name.lastName(),
                    correo: internet.email(),
                    image:image.avatar()
                }
            )
        }
        this.users = [...this.users, ...newUsers];
        return newUsers;
    }
}

export {UserMock}