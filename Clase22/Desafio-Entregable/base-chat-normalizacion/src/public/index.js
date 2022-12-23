const socketClient = io();

//captura el valor del email del usuario
let user;
Swal.fire({
    title: 'Perfil formulario',
    html: `<input type="email" id="email" class="swal2-input" placeholder="correo electronico">
    <input type="text" id="name" class="swal2-input" placeholder="Nombre">
    <input type="text" id="lastname" class="swal2-input" placeholder="Apellido">`,
    confirmButtonText: 'Confirmar',
    focusConfirm: false,
    preConfirm: () => {
        //capturar valores de los campos del formulario
        const email = Swal.getPopup().querySelector('#email').value;
        const name = Swal.getPopup().querySelector('#name').value;
        const lastname = Swal.getPopup().querySelector('#lastname').value;
        if (!email || !name || !lastname) {
            Swal.showValidationMessage(`Por favor completa todos los campos`)
        }
        return { email, name,lastname }
    },
    allowOutsideClick: false,
}).then((result) => {
    Swal.fire(`
        Correo: ${result.value.email}
        Nombre: ${result.value.name}
        Apellido: ${result.value.lastname}
    `.trim())
    // console.log(result.value)
    user = result.value;
    document.getElementById("userEmail").innerHTML=`<strong>Bienvenido ${user.name}</strong>`;
});


//**************//
//envio del formulario
const productForm = document.getElementById("productForm");
productForm.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    const product= {
        title:document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value
    }
    socketClient.emit("newProduct",product)
    productForm.reset();
})


//**************//
//productos en tiempo real
const createTable = async(data)=>{
    const response = await fetch("./template/table.handlebars");
    const result = await response.text();
    const template = Handlebars.compile(result);
    const html = template({products:data});
    return html;
}

socketClient.on("products",async(data)=>{
    const htmlTable = await createTable(data);
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = htmlTable;
})


//**************//
// Denormalizacion
const authorSchema = new normalizr.schema.Entity("authors",{},{idAttribute:"email"});//id:con el valor del campo email.
const messageSchema = new normalizr.schema.Entity("messages",
    {
        author:authorSchema
    }
);
//esquema global o padre
const chatSchema = new normalizr.schema.Entity("chats", {
    messages: [messageSchema]
});

//chat
socketClient.on("messages",async (dataMsg)=>{
    console.log("data normalizada: ",JSON.stringify(dataMsg, null, "\t").length);
    const data = normalizr.denormalize(dataMsg.result,chatSchema,dataMsg.entities);
    console.log("data normal: ",JSON.stringify(data,null, "\t").length);
    let messageElements = "";
    data.messages.forEach(msg=>{
        messageElements += `<div><strong>${msg.author.name} - ${msg.timestamp}:</strong> ${msg.text}</div>`;
    })
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.innerHTML = data.messages.length>0 ? messageElements : '';
});

//envio del mensaje del chat
const chatInput = document.getElementById("chatMsg");
const chatButton = document.getElementById("sendMsg");
chatButton.addEventListener("click",()=>{
    socketClient.emit("newMessage",{
        author:user,
        text: chatInput.value,
        timestamp: new Date().toLocaleString(),
    });
    chatInput.value = "";
});