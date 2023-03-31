import { Application, config, Context } from "../depts.ts";
import { userRouter } from "./routes/user.routes.ts";

const {PORT} = config();
const port = parseInt(PORT);

//crear aplicacion del servidor de oak
const app = new Application();


// app.use((ctx:Context)=>{
//     ctx.response.body = "hello from oak server";
// });
app.use(userRouter.routes());

app.listen({port});
console.log(`Server listening on port ${PORT}`);