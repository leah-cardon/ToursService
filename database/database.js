const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb://localhost/tourDb', { useNewUrlParser: true, useUnifiedTopology: true });
  } catch (error) {
    console.error(`Connection error! ${error}`);
    throw error;
  }
};

connect().then(() => console.log('Connected to tourDb!')).catch((err) => console.error(err));

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

module.exports = {
  User,
  Agent,
};
