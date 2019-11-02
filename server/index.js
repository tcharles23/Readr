const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./auth-routes');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port :${PORT}!`);
});
