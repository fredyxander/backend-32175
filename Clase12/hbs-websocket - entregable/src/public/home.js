console.log("js home view");
const socketClient = io();

//enviar producto a traves de sockets
const productForm = document.getElementById("productForm");
productForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        thumbnail: document.getElementById("thumbnail").value
    }
    // console.log("product",product)
    //enviar el producto por medio de socket
    socketClient.emit("newProduct", product);
});

const productsContainer = document.getElementById("productsContainer");
//recibir productos y mostrarlos en una tabla.
socketClient.on("productsArray", async(data)=>{
    console.log(data)
    const templateTable = await fetch("./templates/table.handlebars");
    //convertimos a formato del template
    const templateFormat = await templateTable.text();
    // console.log(template)
    const template = Handlebars.compile(templateFormat);
    //generamos el html con el template y con los datos de los productos
    const html = template({products:data});
    productsContainer.innerHTML = html;
})