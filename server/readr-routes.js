// Express router for all main features of the Readr app

const router = require('express').Router();
const {
  categorySearch,
  selectCategory,
  selectBook,
  getInfo,
} = require('./suggestion');
const dbHelpers = require('../sequelize/db-helpers');

const authCheck = (req, res, next) => {
  if (!req.user) {
    // if user is not logged in
    res.redirect('/');
  } else {
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.send(`you are logged in as: ${req.user.username}`);
});

router.get('/suggestion', (req, res) => {
  const { user } = req;
  const book = {};
  dbHelpers.getPreferences(user.id)
    .then((preferences) => {
      const category = selectCategory(preferences.dataValues);
      book.genre = category;
      return categorySearch(category, 0);
    })
    .then((books) => categorySearch(book.genre, selectBook(books.ebook_count)))
    // Get total book count & Send request with offset set to a random number from the count
    .then((books) => {
      book.title = books.works[0].title;
      book.author = books.works[0].authors[0].name;
      book.urlSnippet = books.works[0].ia;
      book.availability = books.works[0].availability.status;
      book.buyLink = books.works[0].saleInfo;
      return getInfo(book.title, book.author);
    })
    .then((bookInfo) => {
      book.isbn = bookInfo.isbn;
      book.description = bookInfo.description;
      book.coverURL = bookInfo.coverURL;
      book.title = bookInfo.title;
      book.buyLink = bookInfo.buyLink;
      return dbHelpers.insertBook(book);
      // res.send(JSON.stringify(book));
    })
    .then(() => res.send(JSON.stringify(book)))
    .catch((err) => {
      console.error(err);
      res.end();
    });
});

// Endpoint to return list of followers
router.get('/followers', (req, res) => {
  console.log(req.user, 'folllowerrs');
  const { user } = req;
  dbHelpers.getFollowers(user.id)
    .then((followers) => {
      res.send(JSON.stringify(followers));
    });
});

// Endpoint to return list of users you are following and their id#
router.get('/following', (req, res) => {
  console.log(req.userName, 'followinnng');
  const { user } = req;
  dbHelpers.getFollowing(user.id)
    .then((following) => {
      res.send(JSON.stringify(following));
    });
});

// Endpoint to follow a user
router.post('/follow/:followerID', (req, res) => {
  console.log(req, ' user follow me');
  const { user } = req;
  dbHelpers.followUser(user.id, req.params.followerID)
    .then(() => {
      res.send('successfully followed');
    });
});

// Endpoint to unfollow a user
router.post('/unfollow/:followerID', (req, res) => {
  const { user } = req;
  dbHelpers.unfollowUser(user.id, req.params.followerID)
    .then(() => {
      res.send('successfully unfollowed');
    });
});

// Endpoint to update user preferences
router.post('/preferences', (req, res) => {
  console.log('req', req.body);
  console.log('genreC', req.body.Comedy);
  console.log('user', req.body.user.id);
  // const { userID, genre, toRead } = req.body;
  // dbHelpers.updatePreferences(userID, genre, toRead)
  //   .then(() => {
  //     res.send(201);
  //   });
});

router.post('/interest', (req, res) => {
  const { userID, isbn, toRead } = req.body;
  dbHelpers.createUserBook(userID, isbn, toRead)
    .then(() => dbHelpers.findBook(isbn))
    .then((bookData) => dbHelpers.updatePreferences(userID, bookData.genre, toRead))
    .then(() => {
      res.status(200).send('book added to user list');
    })
    .catch((error) => console.error(error));
});

router.patch('/interest', (req, res) => {
  const { userID, isbn, toUpdate } = req.body;
  dbHelpers.changeUserInterest(userID, isbn, toUpdate)
    .then(() => dbHelpers.findBook(isbn))
    .then((bookData) => dbHelpers.updatePreferences(userID, bookData.genre, toUpdate))
    .then(() => {
      res.status(200).send('book list updated');
    })
    .catch((error) => console.error(error));
});

router.post('/booklist', (req, res) => {
  const { userID, toRead } = req.body;
  dbHelpers.userBookList(userID, toRead)
    .then((bookList) => {
      res.send(bookList);
    })
    .catch((error) => console.error(error));
});
module.exports = router;
