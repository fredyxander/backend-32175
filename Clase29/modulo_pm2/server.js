import express from "express";

//modo cluster
// pm2 start index.js --name="servidor1" -i max -- 4000

//modo fork
// pm2 start index.js --name="servidor1" -- 3000

//eliminar procesos
// pm2 delete all
//pm2 update

//loadtest
// loadtest -n 1000 -c 100 http://localhost:4000

const app = express();
const PORT = parseInt(process.argv[2]) || 8080;

app.get("/",(req,res)=>{
    for(let i=0;i<1e8;i++){}
    res.send(`respuesta desde el proceso ${process.pid}`);
});

app.listen(PORT,()=>console.log(`Server listening on port ${PORT} on process ${process.pid}`));