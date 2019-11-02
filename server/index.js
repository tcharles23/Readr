const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require('../config/passport-setup');
const authRoutes = require('./auth-routes');

const PORT = process.env.PORT || 8080;
const app = express();

// initialize cookie session
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000, // 1 day in ms
  keys: [process.env.cookieKey],
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port :${PORT}!`);
});
