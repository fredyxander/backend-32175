console.log("js funcionando")

//incializacion del socket del lado del clinete.
const socketClient = io();

const inputChat = document.getElementById("chatInput");

// inputChat.addEventListener("keydown", (e)=>{
//     // console.log(e.key)
//     socketClient.emit("tecla", e.key)
// })

inputChat.addEventListener("keydown", (e)=>{
    // console.log(e.key)
    if(e.key === "Enter"){
        socketClient.emit("mensaje", inputChat.value)
        inputChat.value = "";
    }
})

const msgContainer = document.getElementById("msgContainer");

socketClient.on("mensajes", (data)=>{
    msgContainer.innerHTML="";
    data.forEach(element => {
        const parrafo = document.createElement("p");
        parrafo.innerHTML = `id: ${element.user}: ${element.msg}`;
        msgContainer.appendChild(parrafo);
    });
})