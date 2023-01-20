import express from "express";
import cluster from "cluster";
import os from "os";

const numeroCpus = os.cpus().length;
// console.log(numeroCpus)

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    for(let i=0;i<1e8;i++){}
    res.send(`respuesta desde el proceso ${process.pid}`);
    // cluster.worker.kill();//simulacion subproceso deja de funcionar
});

//configuracion del cluster
// if(cluster.isPrimary){
//     //crear subprocesos(workers) por cada uno de los nucleos del procesador del computador
//     for(let i=0;i<numeroCpus;i++){
//         cluster.fork();
//     }
//     cluster.on("exit",(worker)=>{
//         console.log(`Este subproceso ${worker.process.pid} dejo de funcionar`);
//         cluster.fork();
//     });
// } else {
//     app.listen(PORT,()=>console.log(`Server listening on port ${PORT} on process ${process.pid}`));
// }
app.listen(PORT,()=>console.log(`Server listening on port ${PORT} on process ${process.pid}`));