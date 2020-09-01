exports.seed = async function (knex) {
  await knex('instructions').insert([
    {
      id: 1,
      step_name: 'separate eggs, flour, butter into bowl',
      recipe_id: 1,
      step_number: 1,
    },
    {
      id: 2,
      step_name: 'pour mix into baking pan',
      recipe_id: 1,
      step_number: 2,
    },
    {
      id: 3,
      step_name: 'bake at 350F for 45 minutes',
      recipe_id: 1,
      step_number: 3,
    },
    {
      id: 4,
      step_name: 'let ribeye come to room temp',
      recipe_id: 2,
      step_number: 1,
    },
    {
      id: 5,
      step_name: 'sear in pan with butter and garlic',
      recipe_id: 2,
      step_number: 2,
    },
    {
      id: 6,
      step_name: 'let ribeye rest for 4 minutes',
      recipe_id: 2,
      step_number: 3,
    },
    { id: 7, step_name: 'boil potatoes', recipe_id: 3, step_number: 1 },
    {
      id: 8,
      step_name: 'combine potatoes, garlic, butter',
      recipe_id: 3,
      step_number: 2,
    },
    { id: 9, step_name: 'mash', recipe_id: 3, step_number: 3 },
  ]);
};
