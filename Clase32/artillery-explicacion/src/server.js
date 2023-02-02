import express from "express";
import cluster from "cluster";
import os from "os";

const app = express();
const PORT = parseInt(process.argv[2]) || 8080;
const MODO = process.argv[3] || "FORK";
const numeroCPUS = os.cpus().length;

if(MODO === "CLUSTER" & cluster.isPrimary){
    for(let i=0;i<numeroCPUS;i++){
        cluster.fork()
    }

    cluster.on("exit",(worker)=>{
        console.log(`El proceso ${worker.process.pid} dejo de funcionar`);
        cluster.fork();
    })
} else {
    app.listen(PORT,()=>console.log(`Server listening on port ${PORT} on process ${process.pid}`));

    app.get('/', (req, res) => {
        const primes = []
        const max = Number(req.query.max) || 1000
        for (let i = 1; i <= max; i++) {
            if (isPrime(i)) primes.push(i)
        }
        res.json(primes)
    });
}

function isPrime(num) {
    if ([2, 3].includes(num)) return true;
    else if ([2, 3].some(n => num % n == 0)) return false;
    else {
        let i = 5, w = 2;
        while ((i ** 2) <= num) {
            if (num % i == 0) return false
            i += w
            w = 6 - w
        }
    }
    return true
}
