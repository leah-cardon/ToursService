const mongoose = require('mongoose');
const models = require('../database/models.js');
const seed = require('../database/seed.js');

// Runs ONCE before ANY tests in this file - NOT before EACH test!
beforeAll(async (done) => {
  // disconnect from the real database first!
  await mongoose.disconnect();
  await mongoose.connect('mongodb://localhost/tourDbTest', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', (err) => done.fail(err));

  const agents = seed.createFakeAgents();
  const users = seed.createFakeUsers(agents);

  await models.seedUsers(users)
    .then(() => models.seedAgents(agents))
    .catch((error) => console.log(error));

  done();
});

describe('Seed Test Suite', () => {
  test('should insert 100 users into the database', async () => {
    const users = await models.getUsers();
    expect(users.length).toBe(100);
  });

  test('should insert 6 agents into the database', async () => {
    const agents = await models.getAgents();
    expect(agents.length).toBe(5);
  });
});

afterAll(async (done) => {
  await mongoose.disconnect();
  done();
});
