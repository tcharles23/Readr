const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const models = require('../sequelize/models/index');
require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

// sync () will create all tables to the database if they don't exist in the database
models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port :${PORT}!`);
  });
});
