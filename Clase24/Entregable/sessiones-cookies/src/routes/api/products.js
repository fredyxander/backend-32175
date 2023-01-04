import express from "express";
import { productosApi } from "../../services/apiServices.js";

import {faker} from "@faker-js/faker";
const {commerce, image, datatype} = faker;

const productRouter = express.Router();

productRouter.get("/faker",(req,res)=>{
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

productRouter.get('/',async(req,res)=>{
    const productos = await productosApi.getAll();
    res.send(productos);
});

productRouter.get('/:id',async(req,res)=>{
    const productId = req.params.id;
    const product = await productosApi.getById(parseInt(productId));
    if(product){
        return res.send(product)
    } else{
        return res.send({error : 'producto no encontrado'})
    }
});

productRouter.post('/',async(req,res)=>{
    const newProduct = req.body;
    const result = await productosApi.save(newProduct);
    res.send(result);
});

productRouter.put('/:id',async(req,res)=>{
    const cambioObj = req.body;
    const productId = req.params.id;
    const result = await productosApi.updateById(parseInt(productId),cambioObj);
    res.send(result);
});

productRouter.delete('/:id',async(req,res)=>{
    const productId = req.params.id;
    const result = await productosApi.deleteById(parseInt(productId));
    res.send(result);
});

export {productRouter};