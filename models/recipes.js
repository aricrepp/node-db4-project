const db = require('../data/config');

async function getRecipes() {
  return db('recipes');
}

async function getShoppingList(id) {
  return db
    .select('ingredients.name', 'ingredients.quantity')
    .from('recipes_ingredients as ri')
    .join('ingredients', 'ingredients.id', 'ri.ingredient_id')
    .where('ri.recipe_id', '=', id);
}

async function getInstructions(id) {
  return db
    .select('instructions.step_number', 'instructions.step_name')
    .from('recipes_instructions as ri')
    .join('instructions', 'instructions.id', 'ri.instruction_id')
    .where('ri.recipe_id', '=', id)
    .orderBy('instructions.step_number', 'asc');
}

async function getRecipesForIngredient(id) {
  return db
    .distinct('r.name')
    .from('recipes_ingredients as ri')
    .join('recipes as r', 'r.id', 'ri.recipe_id')
    .where('ri.ingredient_id', id);
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesForIngredient,
};
