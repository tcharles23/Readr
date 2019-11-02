const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.send('logging in');
});

// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
});

// auth with google
router.get('/google', passport.authenticate('google', {
  // Sends user to consent screen
  scope: ['profile'],
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // access current user through req.user
  // redirect to post login page
  res.redirect('/readr');
  res.send('you reached the callback URI');
});

module.exports = router;
