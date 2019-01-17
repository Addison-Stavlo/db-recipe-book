
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
  
        tbl.string('name', 128).notNullable();
        
        tbl.text('directions');

        tbl.integer('dish_id').unsigned().references('id').inTable('dishes').notNullable();

        tbl.unique('name','uq_recipes_name');
  
        tbl.timestamps(true,true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
  };
