const { User, Agent } = require('./database.js');

// Gets list of all users.
const getUsers = () => User.find();

// Inserts user into database if not already there.
const insertUser = (user, res) => {
  User.findOne({ name: user.name })
    .then((existingUser) => {
      if (!existingUser) {
        console.log(`Inserted ${user.name} into the database!`);
        return User.create(user)
          .then(() => res.sendStatus(200));
      }
      throw (new Error('User exists!'));
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(`${err}`);
    });
};

// Get list of all agents.
const getAgents = (res) => Agent.find()
  .then((agents) => res.status(200).send(agents))
  .catch((err) => {
    console.error(err);
    res.status(500).send(`${err}`);
  });

// --------------- Seeding Scripts --------------- //
const seedUsers = (users) => User.deleteMany({})
  .then(() => User.insertMany(users))
  .catch((err) => console.error(err));

const seedAgents = (agents) => Agent.deleteMany({})
  .then(() => Agent.insertMany(agents))
  .catch((err) => console.error(err));

module.exports = {
  getUsers,
  getAgents,
  insertUser,
  seedUsers,
  seedAgents,
};
