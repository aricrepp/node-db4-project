exports.seed = async function (knex) {
  await knex('recipes').insert([
    { id: 1, name: 'cake' },
    { id: 2, name: 'steak' },
    { id: 3, name: 'mashed potatoes' },
  ]);
};
