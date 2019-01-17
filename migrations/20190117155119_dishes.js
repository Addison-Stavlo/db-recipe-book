
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
      tbl.increments();

      tbl.string('name', 128).notNullable();

      tbl.unique('name','uq_dishes_name');

      tbl.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
