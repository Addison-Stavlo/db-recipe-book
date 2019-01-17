
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: 'Street Tacos'},
        {dish_id: 1, name: 'Tex Mex Tacos'},
        {dish_id: 2, name: 'Deep Dish Pizza'}
      ]);
    });
};
