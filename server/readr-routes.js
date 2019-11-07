// Express router for all main features of the Readr app

const router = require('express').Router();
const { categorySearch, selectCategory, selectBook } = require('./suggestion');

const authCheck = (req, res, next) => {
  if (!req.user) {
    // if user is not logged in
    res.redirect('/auth/login');
  } else {
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.send(`you are logged in as: ${req.user.username}`);
});

router.get('/suggestion', (req, res) => {
  // TODO: Get users personalized data as userPref
  // Select random category from user's personalized data
  const userPref = { comedy: 0.74, romance: 0.54, thriller: 0.21 }; // FIXME: temp data
  const category = selectCategory(userPref);

  // Send search to that category
  categorySearch(category, 0)
    .then((books) => categorySearch(category, selectBook(books.ebook_count)))
    // Get total book cound & Send request with offset set to a random number from the count
    .then((books) => {
      // check if book is already in list attached to user if so repeat process
      console.log(books.works[1]);
      res.send(JSON.stringify(books.works[1]));
    });
});

module.exports = router;
