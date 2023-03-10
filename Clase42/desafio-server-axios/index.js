import axios from "axios";

const URL = "http://localhost:8080";

const testGetUsers = async()=>{
    try {
        const response = await axios.get(`${URL}/users`);
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
}

const saveProduct = async()=>{};

const deleteProduct = async()=>{};

testGetUsers();