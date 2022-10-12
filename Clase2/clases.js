class Persona{
    constructor(name, lastname, age, city){
        this.name=name;
        this.lastname=lastname;
        this.age=age;
        this.city=city;
    }

    saludar(){
        console.log(`Hola soy ${this.name}`)
    }

    despedir(){
        return 'Adios';
    }
}

// const Juan ={
//     name:"juan",
//     lastname:"mora",
//     age:20
// }
const Juan = new Persona("juan","Diaz",25,"buenos aires");
console.log(Juan);

const Maria = new Persona("Maria","Arrieta",20,"ciudad de mexico");

Juan.saludar();
Maria.saludar();

console.log(Juan.despedir());