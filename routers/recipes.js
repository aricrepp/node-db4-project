const express = require('express');
const db = require('../data/config');
const { nextTick } = require('process');
const router = express.Router();

router.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    nextTick(err);
  }
});

router.get('/api/recipes/:id/shopping-list', async (req, res) => {
  try {
    const list = await db.getShoppingList(req.params.id);
    res.status(200).json(list);
  } catch (err) {
    nextTick(err);
  }
});

router.get('/api/recipes/:id/instructions', async (req, res) => {
  try {
    const instructions = await db.getInstructions(req.params.id);
    res.status(200).json(instructions);
  } catch (err) {
    nextTick(err);
  }
});

router.get('/api/ingredients/:id/recipes', async (req, res) => {
  try {
    const recipes = await db.getRecipesForIngredient(req.params.id);
    res.status(200).json(recipes);
  } catch (err) {
    nextTick(err);
  }
});

module.exports = router;
