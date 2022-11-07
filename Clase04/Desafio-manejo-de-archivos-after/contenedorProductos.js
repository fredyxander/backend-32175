const fs = require("fs");

class Contenedor {
    constructor(name){
        this.filename = name;
    }
    // const producto1={
    //     title: "camisa deportiva",
    //     price: 520,
    //     thumbnail: "https://falabella.scene7.com/is/image/FalabellaCO/8263644_1?wid=800&hei=800&qlt=70"
    // }
    async save(product){
        try {
            if(fs.existsSync(this.filename)){
                const productos = await this.getAll();
                if(productos.length>0){
                    //agregar un producto adicional
                    const lastId =productos[productos.length-1].id+1;
                    product.id = lastId;
                    productos.push(product);
                    await fs.promises.writeFile(this.filename,JSON.stringify(productos,null,2));
                } else{
                    //agregamos un primer producto
                    product.id = 1;
                    await fs.promises.writeFile(this.filename,JSON.stringify([product],null,2));
                }
            } else {
                product.id = 1;
                await fs.promises.writeFile(this.filename,JSON.stringify([product],null,2));
            }
        } catch (error) {
            return "El producto no pudo ser guardado";
        }
    }

    async getAll(){
        try {
            const contenido = await fs.promises.readFile(this.filename,"utf-8");
            if(contenido.length>0){
                const productos = JSON.parse(contenido);
                return productos;
            } else{
                return [];
            }
        } catch (error) {
            return "El archivo no se puede ser leido";
        }
    }

    async getById(id){
        try {
            //obtener todos los productos.
            const productos = await this.getAll();
            //buscar nuestro producto por el id
            const producto = productos.find(elemento=>elemento.id === id);
            return producto;
        } catch (error) {
            return "El producto no se encuentra";
        }
    }

    async deleteById(id){
        //[1,2,3,4,5].
        //[1,2,4,5]
        try {
            const productos = await this.getAll();
            const newProducts = productos.filter(elemento=>elemento.id !== id);
            await fs.promises.writeFile(this.filename,JSON.stringify(newProducts,null,2));
            return `El producto con el id ${id} fue elimnado`;
        } catch (error) {
            return "El elemento no puede ser eliminado"
        }
    }

    getName(){
        return this.filename;
    }
}

const producto1={
    title: "camisa deportiva",
    price: 520,
    thumbnail: "https://falabella.scene7.com/is/image/FalabellaCO/8263644_1?wid=800&hei=800&qlt=70"
}
const producto2={
    title: "camisa niño",
    price: 320,
    thumbnail: "https://offcorss.vteximg.com.br/arquivos/ids/744125-460-540/51048651-Azul-13-4404_1.jpg?v=637844236663900000"
}

const manejadorProductos = new Contenedor("productos.txt");
console.log(manejadorProductos);

const getData = async()=>{
    //guardar un producto
    await manejadorProductos.save(producto1);
    await manejadorProductos.save(producto2);
    const productos = await manejadorProductos.getAll();
    console.log("productos",productos);
    const productoEncontrado = await manejadorProductos.getById(1);
    console.log("producto encontrado>", productoEncontrado);
    await manejadorProductos.deleteById(1);
}
getData();