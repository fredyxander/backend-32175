class UserDto{
    constructor({_id, nombre, apellido, dni}){
        this.fullname = `${nombre} ${apellido}`;
        this.dni=dni;
    }
}

export const convertUserToDto = (users)=>{
    if(Array.isArray(users)){
        return users.map(user=> new UserDto(user));
    } else {
        return new UserDto(users);
    }
}

export {UserDto}