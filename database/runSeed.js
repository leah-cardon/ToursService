const mongoose = require('mongoose');
const db = require('./models.js');
const seed = require('./seed.js');

// npm run seed
// Run this file to insert 100 random booking requests into the database.
// NOTE: This will flush all database info first prior to running.

const users = seed.createFakeUsers();
const agents = seed.createFakeAgents();

db.seedUsers(users)
  .then(() => db.seedAgents(agents))
  .then(() => mongoose.disconnect());
