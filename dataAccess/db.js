const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

function getDishes() {
    return db('dishes');
}

async function addDish(newDish) {  
    let ids = await db('dishes').insert(newDish);
    return {id: ids[0]}
}

function getDish(id) {
    return db('dishes').join('recipes', 'recipes.dish_id', '=', 'dishes.id').where({'dishes.id': id});
}

function getRecipes() {
    return db('recipes').join('dishes','dishes.id','=','recipes.dish_id').select('recipes.id','recipes.name','dishes.name as dish');
}

async function addRecipe(newRecipe) {
    let ids = await db('recipes').insert(newRecipe);
    return {id: ids[0]}
}

async function getRecipe(id) {
    let recipe = await db('recipes')
    .join('dishes', 'dishes.id', '=', 'recipes.dish_id')
    .select('recipes.name as recipe','dishes.name as dish', 'recipes.directions')
    .where({'recipes.id': id});

    let ingredientList = await db('recipes')
    .join('ingredientsList','ingredientsList.recipe_id', '=', 'recipes.id')
    .join('ingredients', 'ingredients.id', '=','ingredientsList.ingredient_id')
    .select('ingredients.name as ingredient',  'ingredientsList.amount', 'ingredientsList.unit')
    .where({'recipes.id': id});

    return {
        ...recipe[0],
        ingredientList
    }
}

function getShoppingList(recipeID) {
    return db('recipes')
    .join('ingredientsList','ingredientsList.recipe_id', '=', 'recipes.id')
    .join('ingredients', 'ingredients.id', '=','ingredientsList.ingredient_id')
    .select('ingredients.name as ingredient',  'ingredientsList.amount', 'ingredientsList.unit')
    .where({'recipes.id': recipeID});
}

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
    getRecipe,
    getShoppingList
}