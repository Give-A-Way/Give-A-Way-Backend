const { Pool } = require('pg')

const pool = new Pool({
    database: 'Give_a_way',
    user: "postgres",
    password: "",
})

module.exports = pool;