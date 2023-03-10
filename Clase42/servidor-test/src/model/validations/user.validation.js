import joi from "joi";

class UserValidation{
    static validateUser(user, nameRequired, maxLastname){
        //crear el esquema de validacion
        const userSchemaValidation = joi.object({
            nombre: nameRequired ? joi.string().required() : joi.string(),
            apellido: maxLastname ? joi.string().max(maxLastname) : joi.string(),
            dni: joi.required()
        });
        const {error} = userSchemaValidation.validate(user);
        if(error) {
            throw new Error(error);
        }
    }
}

export {UserValidation}