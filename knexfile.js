// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'give_a_way',
      user:     'aldair',
      password: 'a'
    }
  },

  

  production: {
    client: 'pg',
    connection: {
      database: 'give_a_way',
      user:     'aldair',
      password: 'a'
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
