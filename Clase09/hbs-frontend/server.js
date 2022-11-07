const express = require("express");
const app = express();

app.listen(8080,()=>console.log("server listening on port 8080"));

//vamos a dar acceso a los usuarios a todos los archivos que esten dentro de public
app.use(express.static(__dirname + "/public"));