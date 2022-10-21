//importar http
const http = require("http");

// crear nuestro servidor con http
const server = http.createServer((request, response)=>{
    console.log("el servidor ha recibido una solicitud");
    const currentDate = new Date();
    const hour = currentDate.getHours();
    console.log(hour)
    if(hour>6 && hour<12){
        response.end("Buenos dias")
    } else if(hour>12 && hour<20){
        response.end("buenas tardes")
    } else{
        response.end("buenas noches")
    }
    // response.end("solicitud completada");
});

//levantar el servidor o ejecutar el servidor en un puerto.
server.listen(8080,()=>console.log("servidor corriendo en el puerto 8080"));