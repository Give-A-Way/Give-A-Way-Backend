/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable("church_listings", table => {
        table.increments('id').primary();
        table.string("church_name").unique();
        table.string("location");
        table.string("img");
        table.string("phone_number");
        table.string("status");
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("church_listings");
};
