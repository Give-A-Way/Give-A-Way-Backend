const { Pool } = require('pg')

let connectionString = 'postgresql://postgres:W1gBqP4SFe6U731gDtxQ@containers-us-west-121.railway.app:5907/railway'
const pool = new Pool({
    connectionString,
    // database: 'give_a_way',
    // user: "aldair",
    // password: "a",
})

module.exports = pool;