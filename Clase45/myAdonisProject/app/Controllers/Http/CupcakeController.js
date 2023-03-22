'use strict'
const Cupcake = use("App/models/Cupcake");

class CupcakeController {
  async getAll(){
    try {
      const data = (await Cupcake.all()).toJSON();
      return data;
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = CupcakeController
