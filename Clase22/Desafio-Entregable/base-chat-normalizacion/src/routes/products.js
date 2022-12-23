import express from "express";
import {faker} from "@faker-js/faker";
const {commerce, image, datatype} = faker;

// import { Contenedor } from "../managers/contenedorProductos.js";
import { ContenedorSQL } from "../managers/contenedorSql.js";
import { dbOptions } from "../config/dbConfig.js";

const router = express.Router();

// Services
// const productosApi = new Contenedor("productos.txt");
const productosApi = new ContenedorSQL(dbOptions.sqliteDB, "products");

router.get("/faker",(req,res)=>{
    const CANTIDAD_PRODUCTOS = 5;
    let arrayProducts = [];
    for(let i =0;i<CANTIDAD_PRODUCTOS;i++){
        arrayProducts.push({
            id:datatype.uuid(),
            title: commerce.product(),
            price: commerce.price(),
            thumbnail: image.imageUrl()
        });
    }
    res.json({testProducts:arrayProducts});
});

router.get('/',async(req,res)=>{
    const productos = await productosApi.getAll();
    res.send(productos);
});

router.get('/:id',async(req,res)=>{
    const productId = req.params.id;
    const product = await productosApi.getById(parseInt(productId));
    if(product){
        return res.send(product)
    } else{
        return res.send({error : 'producto no encontrado'})
    }
});

router.post('/',async(req,res)=>{
    const newProduct = req.body;
    const result = await productosApi.save(newProduct);
    res.send(result);
});

router.put('/:id',async(req,res)=>{
    const cambioObj = req.body;
    const productId = req.params.id;
    const result = await productosApi.updateById(parseInt(productId),cambioObj);
    res.send(result);
});

router.delete('/:id',async(req,res)=>{
    const productId = req.params.id;
    const result = await productosApi.deleteById(parseInt(productId));
    res.send(result);
});

export {router};