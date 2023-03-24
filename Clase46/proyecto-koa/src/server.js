import koa from "koa";
import {koaBody} from "koa-body";
import { catsRouter } from "./routes/cats.routes.js";

const app = new koa();

app.use(koaBody());//interpeta json del body de peticiones POST

const PORT = 8080;

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));

app.use(catsRouter.routes());