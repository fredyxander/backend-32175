const fs = require("fs");

class Contenedor{
    constructor(filename){
        this.filename = filename
    }

    async save(){
        try {
            const contenido = await fs.promises.writeFile(this.filename,"contenido")
        } catch (error) {
            
        }
    }
}

const productos = new Contenedor("./productos.txt")