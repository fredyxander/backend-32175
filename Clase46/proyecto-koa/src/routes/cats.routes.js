// import {Router} from "express";
import Router from "koa-router";

const router = new Router({
    prefix:"/cats" //el prefijo es la ruta base
});

//koa routes
// ctx.body ={} //=>res.json({})
// ctx.request.params //=>req.params
// ctx.response.status=200 //=>res.status(200)

let cats=[];
//definicion de los endpoints
router.get("/",(ctx)=>{//ctx contiene a request y a response
    ctx.body = {
        message:"success",
        data:cats
    }
});

router.post("/",(ctx)=>{
    const catBody = ctx.request.body;
    const newCat=catBody;
    cats.push(newCat);
    ctx.response.status = 200;
    ctx.body = {
        message:"success",
        data:newCat
    }
});

router.delete("/:id",(ctx)=>{
    const catId = parseInt(ctx.request.params.id);
    const newCats = cats.filter(cat=>cat.id !==catId);
    console.log(newCats);
    cats = newCats;
    ctx.response.status = 200;
    ctx.body = {
        message:"gato eliminado"
    }
});

export {router as catsRouter};