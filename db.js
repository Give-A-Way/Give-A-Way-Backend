const { Pool } = require('pg')

let connectionString = 'postgresql://postgres:W1gBqP4SFe6U731gDtxQ@containers-us-west-121.railway.app:5907/railway'
const pool = new Pool({
    connectionString,
    // database: 'Give_a_way',
    // user: "postgres",
    // password: "",
})

module.exports = pool;