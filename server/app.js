const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

const db = require('../database/models.js');

app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// req.body should include {name, number, email, type, date, time, call}
// Inserts a user's tour request to the database
app.post('/api/tours/users', (req, res) => db.insertUser(req.body, res));

// Gets list of all agents and send to the client.
app.get('/api/tours/agents', (req, res) => db.getAgents(res));

module.exports = app;
