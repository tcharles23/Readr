// Express router for all main features of the Readr app

const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`you are logged in as: ${req.user.username}`);
});

module.exports = router;
