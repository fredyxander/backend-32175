//En este archivo estan todas las pruebas o test referentes a los usuarios
import supertest from "supertest";
import {expect} from "chai";
import {app} from "../server.js";


//creamos un cliente del servidor para realizar las solicitudes.
const request = supertest(app);

//pruebas para los endpoints de los usuarios
describe("api users endpoints",()=>{

    let responseCreate;
    before(()=>{console.log("Este codigo se ejecuta antes de comenzar todas las prubas")});
    after(()=>{console.log("Este codigo se ejecuta al finalizar todas las pruebas")});
    beforeEach(async()=>{
        console.log("Este codigo se ejecuta antes de comenzar cada prueba");
        const userTest={nombre:"pepe", apellido:"lopez", dni:"111"};
        //1.hacer la peticion y obtenemos la respuesta de la peticion
        responseCreate = await request.post("/users").send(userTest);
    });
    afterEach(async()=>{
        console.log("Este codigo se ejecuta al finalizar cada prueba");
        // await request.delete("/users");
    });

    // it("get users endpoint",async()=>{
    //     //1.hacer la peticion y obtenemos la respuesta de la peticion
    //     const response = await request.get("/users");
    //     // console.log(response);
    //     expect(response.status).equal(200);
    //     expect(response.body).to.have.own.property("data");
    // });

    it("post user endpoint, luego de guardar un usuario, este usuario deberia tener un _id",async()=>{
        // const userTest={nombre:"pepe", apellido:"lopez", dni:"111"};
        // //1.hacer la peticion y obtenemos la respuesta de la peticion
        // const response = await request.post("/users").send(userTest);
        // console.log(response.body);
        expect(responseCreate.status).equal(200);
        expect(responseCreate.body.data).to.have.own.property("_id");
        const userId = responseCreate.body.data._id;
        const responseDelete = await request.delete(`/users/${userId}`);
        expect(responseDelete.body.message).equal("delete successfully");
    });

    it("get user endpoint, luego de guardar el usuario, deberiamos poder obtener ese usuario",async()=>{
        // const userTest={nombre:"pepe", apellido:"lopez", dni:"111"};
        // //1.hacer la peticion y obtenemos la respuesta de la peticion
        // const response = await request.post("/users").send(userTest);
        expect(responseCreate.status).equal(200);
        const userId = responseCreate.body.data._id;
        const responseUser = await request.get(`/users/${userId}`);
        expect(responseUser.body.data.dni).equal(111);
        const responseDelete = await request.delete(`/users/${userId}`);
        expect(responseDelete.body.message).equal("delete successfully");
    });

});