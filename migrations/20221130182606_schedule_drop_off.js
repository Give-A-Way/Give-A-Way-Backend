/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable("schedule_drop_off", table => {
        table.increments('id').primary()
        table.integer("user_id");
        table.integer("church_id");
        table.foreign("user_id").references("id").inTable("business_users")
        table.foreign("church_id").references("id").inTable("church_listings")
        table.string("item_description");
        table.string("schedule_time");
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("schedule_drop_off")
};
