const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tourDb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to tourDatabase!'));

// type = in-person/video toggle. call = checkbox for financing call.
const userSchema = new mongoose.Schema({
  name: String,
  number: String,
  email: String,
  type: String,
  date: String,
  time: String,
  call: Boolean,
});

const User = mongoose.model('User', userSchema);

const getAll = () => User.find();

// Inserts user into database if not already there.
const insert = (user, res) => {
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

module.exports = {
  getAll,
  insert,
};
