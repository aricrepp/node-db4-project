exports.up = async function (knex) {
  return knex.schema
    .createTable('recipes', (table) => {
      table.increments('id');
      table.text('name').notNull();
    })
    .createTable('ingredients', (table) => {
      table.increments('id');
      table.text('name').notNull();
      table.integer('quantity').notNull();
    })
    .createTable('instructions', (table) => {
      table.increments('id');
      table.integer('recipe_id').notNull().references('id').inTable('recipes');

      table.text('step_name').notNull();
      table.integer('step_number').notNull();
    })
    .createTable('recipes_ingredients', (table) => {
      table.integer('recipe_id').notNull().references('id').inTable('recipes');

      table
        .integer('ingredient_id')
        .notNull()
        .references('id')
        .inTable('ingredients');
    })
    .createTable('recipes_instructions', (table) => {
      table.integer('recipe_id').notNull().references('id').inTable('recipes');

      table
        .integer('instruction_id')
        .notNull()
        .references('id')
        .inTable('instructions');
    });
};

exports.down = async function (knex) {};
