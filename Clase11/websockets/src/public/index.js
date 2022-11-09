console.log("js funcionando")

//incializaciondel socket del lado del clinete.
const socketClient = io();

socketClient.on("primerMensaje", (data)=>{
    console.log(data)
})

socketClient.emit("msgCliente", {user:"fredy"})