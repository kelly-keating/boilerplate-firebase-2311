/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('fruits').del()
  await knex('fruits').insert([
    { id: 1, name: 'apple', rating: 6 },
    { id: 2, name: 'orange', rating: 4 },
    { id: 3, name: 'banana', rating: 7 },
  ])
}
