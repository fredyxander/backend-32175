class Person{
    private first_name: string;
    private last_name: string;
    constructor(name:string, lastname:string){
        this.first_name = name;
        this.last_name = lastname;
    }

    getFullName(){
        return `${this.first_name} ${this.last_name}`
    }
}

// const fredy = new Person("fredy", "chaparro");
// fredy.getFullName();

export {Person}