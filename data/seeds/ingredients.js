exports.seed = async function (knex) {
  await knex('ingredients').insert([
    { id: 1, name: 'eggs', quantity: 2 },
    { id: 2, name: 'sticks of butter', quantity: 1 },
    { id: 3, name: 'ribeye', quantity: 1 },
    { id: 4, name: 'cups of flour', quantity: 3 },
    { id: 5, name: 'potatoes', quantity: 4 },
    { id: 6, name: 'garlic cloves', quantity: 2 },
  ]);
};
