/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable("business_users", table => {
        table.increments('id').primary();
        table.string("company_name");
        table.string("email");
        table.string("username").unique();
        table.string("password");
        
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("business_users")
};
