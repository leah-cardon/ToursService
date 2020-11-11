const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

const db = require('../database/database.js');

const port = 3000;

app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// req.body should include {name, number, email, type, date, time, call}
// Inserts a user's tour request to the database
app.post('/database', (req, res) => db.insert(req.body, res));

app.listen(port, () => console.log(`Tours module is listening at http://localhost:${port}`));
