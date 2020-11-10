const express = require('express');

const app = express();

const path = require('path');

const bodyParser = require('body-parser');

const port = 3000;

app.use(express.static(path.join(__dirname, '/../client/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Tours module is listening at http://localhost:${port}`));
