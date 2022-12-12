const { Pool } = require('pg')

const pool = new Pool({
    database: 'give_a_way',
    user: "aldair",
    password: "a",
})

module.exports = pool;