const faker = require('faker');
const mongoose = require('mongoose');
const db = require('./models.js');

const types = ['in-person', 'video'];
const calls = [true, false];
const titles = ['Listing', 'Premier'];

const users = [];
const agents = [];

// npm run seed
// Run this file to insert 100 random booking requests into the database.
// NOTE: This will flush all database info first prior to running.

for (let i = 0; i < 100; i += 1) {
  const date = new Date(faker.date.future());

  const fakeUser = {
    name: faker.name.findName(),
    number: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    type: types[Math.floor(Math.random() * 2)],
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString(),
    call: calls[Math.floor(Math.random() * 2)],
  };

  users.push(fakeUser);
}

for (let i = 0; i < 4; i += 1) {
  const fakeAgent = {
    name: faker.name.findName(),
    title: titles[Math.floor(Math.random() * titles.length)],
    stars: Math.floor((Math.random() * 5) + 1),
    reviews: Math.floor((Math.random() * 100) + 1),
    sales: Math.floor((Math.random() * 100) + 1),
    photo: '/assets/tbd',
  };
  agents.push(fakeAgent);
}

db.seedUsers(users)
  .then(() => db.seedAgents(agents))
  .then(() => mongoose.disconnect());
