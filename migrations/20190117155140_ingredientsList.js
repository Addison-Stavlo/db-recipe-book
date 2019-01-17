
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredientsList', tbl => {
      tbl.increments();

      tbl.integer('recipe_id').unsigned().references('id').inTable('recipes').notNullable();
      tbl.integer('ingredient_id').unsigned().references('id').inTable('ingredients').notNullable();

      tbl.float('amount').notNullable();
      tbl.string('unit',128).notNullable();
      //unique for combo of recipe_id and ingredient_id
      tbl.unique(['recipe_id','ingredient_id'],'uq_ingredientsList_composite_recipe_id_ingredient_id')

      tbl.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredientsList');
};
