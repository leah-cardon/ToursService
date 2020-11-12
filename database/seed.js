const faker = require('faker');

// This file creates uses faker to create 100 fake users and 5 fake agents.

const createFakeUsers = () => {
  const users = [];
  const types = ['in-person', 'video'];
  const calls = [true, false];

  // insert 7 into future() ?
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
  return users;
};

const createFakeAgents = () => {
  const agents = [];
  const titles = ['Listing', 'Premier'];
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
  return agents;
};

module.exports = {
  createFakeAgents,
  createFakeUsers,
};
