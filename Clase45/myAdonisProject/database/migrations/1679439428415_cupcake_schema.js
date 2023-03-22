'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CupcakeSchema extends Schema {
  up () {
    this.create('cupcakes', (table) => {
      table.string("name",50).notNull().unique()
      table.string("description",200).notNull()
      table.integer("price").notNull()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('cupcakes')
  }
}

module.exports = CupcakeSchema
