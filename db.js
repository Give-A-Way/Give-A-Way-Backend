// Set the deployment environment variable
// Depending on where it is deployed, this could be "staging" or "production"
const env = process.env.NODE_ENV || 'development';

// Grab the corresponding knex configuration object from knexfile.js
const knexConfig = require('./knexfile.js')[env];
// Create the knex connection object using that config
console.log(knexConfig)
const knex = require('knex')(knexConfig);

module.exports = knex;

// module.exports = pool;