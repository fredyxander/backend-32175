console.log("funcionando");

//generar un template
const template = Handlebars.compile(`
    <ul>
        <li>{{nombre}}</li>
        <li>{{apellido}}</li>
        <li>{{edad}}</li>
        <li>{{correo}}</li>
    </ul>
`)

//generar htm, utilizando el template y un objeto de datos.
const html = template({
    nombre:"Pedro",
    apellido:"Garzon",
    edad:26,
    correo:"pedro@gmail.com"
});

const html2 = template({
    nombre:"Pablo",
    apellido:"Mora",
    edad:26,
    correo:"pablo@gmail.com"
});
console.log(html)

document.getElementById("contenedor").innerHTML = html2;