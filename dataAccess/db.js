const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

function getDishes() {
    return db('dishes');
}

async function addDish(newDish) {
    try{
        let ids = await db('dishes').insert(newDish);
        return {id: ids[0]}
    }
    catch(err){
        return err;
    }
}

function getDish(id) {
    return db('dishes').join('recipes', 'recipes.dish_id', '=', 'dishes.id').where({'dishes.id': Number(id)});
}

function getRecipes() {
    return db('recipes').join('dishes','dishes.id','=','recipes.dish_id').select('recipes.id','recipes.name','dishes.name as dish');
}

async function addRecipe(newRecipe) {
    try{
        let ids = await db('recipes').insert(newRecipe);
        return {id: ids[0]}
    }
    catch(err){
        return err;
    }
}


module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}