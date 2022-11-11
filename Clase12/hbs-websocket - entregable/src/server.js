const express = require('express');
const handlebars = require("express-handlebars");
const path = require("path");
const {Server} = require("socket.io");


const Contenedor = require("./managers/contenedorProductos");
const productsService = new Contenedor("productos.txt");
const viewsFolder = path.join(__dirname,"views")

//servidor de express
const app = express();
const server = app.listen(8080,()=>console.log("server listening on port 8080"));


app.use(express.static(__dirname+"/public"));
//middlewares para interpretar la info que llega en formato json a traves de una solicitud
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//vamos a inicializar nuestro motor de plantillas.
app.engine("handlebars",handlebars.engine());
//donde tengo las vistas en mi proyecto
app.set("views", viewsFolder);
//que motor de plantillas voy a utilizar
app.set("view engine", "handlebars");

//configurar el socket del lado del backend
const io = new Server(server);
io.on("connection", async(socket)=>{
    console.log("nuevo cliente conectado");
    //cada vez que el socket se conecte le enviamos los productos
    socket.emit("productsArray", await productsService.getAll());

    //recibir el producto
    socket.on("newProduct", async(data)=>{
        //data es el producto que recibo del formulario
        await productsService.save(data);

        //enviar todos los productos actualizados
        io.sockets.emit("productsArray", await productsService.getAll());
    })
})

//rutas de las vistas
app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/productos", async(req,res)=>{
    const productos = await productsService.getAll();
    console.log(productos)
    res.render("productos", {
        productos:productos
    })
})


//rutas de la api
app.post("/products",async(req,res)=>{
    //obtengo la info del formulario, y la guardo en una variable
    const newProduct = req.body;
    // guardamos el nuevo producto
    await productsService.save(newProduct);
    //despues de guardar exitosamente, redireccionamos a la pagina principal.
    res.redirect("/");
})