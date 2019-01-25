
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredientsList').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientsList').insert([
        {recipe_id: 1, ingredient_id: 1, amount: 1.5, unit: 'lb'},
        {recipe_id: 1, ingredient_id: 2, amount: 0.5, unit: 'cup'},
        {recipe_id: 1, ingredient_id: 3, amount: 2, unit: 'tbsp'},
        {recipe_id: 2, ingredient_id: 1, amount: 2.0, unit: 'lb'},
        {recipe_id: 2, ingredient_id: 2, amount: 0.5, unit: 'cup'},
        {recipe_id: 2, ingredient_id: 3, amount: 2, unit: 'tbsp'}
      ]);
    });
};
