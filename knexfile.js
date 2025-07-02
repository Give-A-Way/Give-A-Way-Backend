// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


module.exports = {
  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING || {
      host: process.env.PGHOST || 'localhost',
      port: process.env.P_PORT || 5433,
      user: process.env.PGUSER || 'postgres',
      password: process.env.PGPASS || 'a',
      database: process.env.POSTGRES_DB || 'give',
    },
  },


  production: {
    client: 'pg',
    connection: {
      database: 'give_a_way',
      user: "aldair",
      password: "a",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
