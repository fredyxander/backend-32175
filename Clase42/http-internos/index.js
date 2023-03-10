import http from "http";
import https from "https";

const URL = "jsonplaceholder.typicode.com";//Cuando trabajemos con http o https, no es necesario agregarlo en la ruta.

//crear opciones para realizar la solcitud.
const options = {
    hostname:URL,
    port:443,
    path:"/users",
    method:"GET"
};

//hacer la peticion
const req = https.request(options,(res)=>{
    // console.log(res);
    let data ="";
    res.on("data",(chunk)=>{
        // console.log(chunk)
        data += chunk.toString();
    });

    res.on("end",()=>{//el evento end me indica que ya terminamos de recibir informacion
        const response = JSON.parse(data);
        console.log(response);
    })
});

req.end();