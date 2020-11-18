const express = require('express');
const path = require('path');
const db = require('../database/models.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

// req.body should include {name, number, email, type, date, time, call}
// Inserts a user's tour request to the database
app.post('/api/tours/users', (req, res) => db.insertUser(req.body)
  .then(() => res.sendStatus(200))
  .catch((err) => {
    console.error(err);
    res.status(500).send(`${err}`);
  }));

// Get date and time of every request in the database
app.get('/api/tours/requests', (req, res) => db.getRequests()
  .then((results) => res.status(200).send(results))
  .catch((err) => res.status(500).send(err)));

// Gets list of all agents and send to the client.
app.get('/api/tours/agents', (req, res) => db.getAgents(res)
  .then((agents) => res.status(200).send(agents))
  .catch((err) => {
    console.error(err);
    res.status(500).send(`${err}`);
  }));

module.exports = app;
