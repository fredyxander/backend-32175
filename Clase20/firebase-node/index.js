import admin from "firebase-admin";
import {readFileSync} from "fs";

const serviceAccount = JSON.parse(readFileSync("./firebaseKey.json"));
// console.log(serviceAccount);

//conexion a la base de datos de firebase
admin.initializeApp(
    {
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://coderback32175.firebase.io"
    }
);
console.log("base de datos conectada");

const operacionesCRUD = async()=>{

    const db = admin.firestore(); //instancia de la base de datos
    const userCollection = db.collection("usuarios"); //definimos la colecion donde se guardan los usuarios

    //INSERT ONE
    // const doc = userCollection.doc(); //creamos la instancia del doc con un id automatico.
    // await doc.create({nombre:"Pablo", dni:"25555000"});
    // console.log("user created");

    //READ collection usuarios
    const snapshot = await userCollection.get();
    const docs = snapshot.docs;
    let users = docs.map(doc=>{
        return{
            id: doc.id,
            nombre: doc.data().nombre,
            dni: doc.data().dni
        }
    });
    console.log(users);

    //update document
    // const doc = userCollection.doc("SOs5TqEGs9XFV29YPfwJ");//referencia al doc que queremos actualozar
    // let result = await doc.update({nombre:"Pablo Mora"});
    // console.log("user updated");

    //delete document
    const doc = userCollection.doc("SOs5TqEGs9XFV29YPfwJ");//referencia al doc que queremos eliminar
    let result = await doc.delete();
    console.log("user deleted");
}
operacionesCRUD();