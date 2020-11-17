const mongoose = require('mongoose');

// type = in-person/video toggle. call = checkbox for financing call.
const userSchema = new mongoose.Schema({
  name: String,
  number: String,
  email: String,
  message: String,
  type: String,
  date: String,
  time: String,
  call: Boolean,
  agent: String,
});

// Later, refactor to add agent photo!
const agentSchema = new mongoose.Schema({
  name: String,
  title: String,
  number: String,
  stars: Number,
  reviews: Number,
  sales: Number,
  photo: String,
});

const User = mongoose.model('User', userSchema);
const Agent = mongoose.model('Agent', agentSchema);

const getConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost/tourDb', { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (err) {
    console.error('ERROR: Connection to tourDb failed!');
  }
};

// Open the connection.
getConnection().catch((err) => console.error(err));

module.exports = {
  User,
  Agent,
};
