const { User, Agent } = require('./database.js');

// Gets list of all users.
const getUsers = () => User.find();

const getRequests = () => User.find({}, 'date time').exec();

// Inserts user into database if not already there.
const insertUser = (user) => {
  User.findOne({ name: user.name }).exec()
    .then((existingUser) => {
      if (!existingUser) {
        console.log(`Inserted ${user.name} into the database!`);
        return User.create(user).exec();
      }
      throw (new Error('User exists!'));
    });
};

// Get list of all agents.
const getAgents = () => Agent.find().exec();

// --------------- Seeding Scripts --------------- //
const seedUsers = (users) => User.deleteMany({})
  .then(() => User.insertMany(users))
  .catch((err) => console.error(err));

const seedAgents = (agents) => Agent.deleteMany({})
  .then(() => Agent.insertMany(agents))
  .catch((err) => console.error(err));

module.exports = {
  getUsers,
  getRequests,
  getAgents,
  insertUser,
  seedUsers,
  seedAgents,
};
