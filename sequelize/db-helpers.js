const models = require('./index');


// ----------BOOKS----------
// Takes a book object and creates a new books
const insertBook = (book) => models.Book.create({
  isbn: book.availability.isbn, // possibly change since might not have isbn FIXME: might change to openlibrary
  title: book.title,
  author: book.authors[0].name, // possibly change to deal with multiple authors
  description: book.description, // TODO: need to request at endpoint /api/books with jscmd as details
  cover: book.cover, // TODO: need to request at endpoint /api/books with jscmd as data
  url: book.url,
});

// Takes an identifying number and returns the book info
const findBook = (identifier) => models.Book.findOne({
  where: {
    isbn: identifier,
  },
});


// ----------USER_PREFERENCES----------
const defaultPref = 0.50;
// Takes the userID and creates the default preferences for the user
const createPreferences = (userID) => models.UserPreference.create({
  userID,
  comedy: defaultPref,
  thriller: defaultPref,
  fantasy: defaultPref,
  romance: defaultPref,
});

// Takes a userID, the subject of the book, and the toRead boolean and updates the preferences
const updatePreferences = (userID, subject, toRead) => {
  // Update the user preferences where userID matches and modify subject based on math
  // (toRead is boolean of which list for positive or negative change)
};

// Takes a userID and returns the user preferences
const getPreferences = (userID) => models.UserPreference.findOne({
  where: {
    userID,
  },
});

// ----------USER_BOOKS----------
// Takes a userID and a toRead boolean and returns list of all books on toRead / not toRead list
const userBookList = (userID, toRead) => models.UserBook.findAll({
  where: {
    userID,
    is_interested: toRead,
  },
});

const createUserBook = (userID, isbn, toRead) => models.UserBook.create({
  userID,
  isbn,
  is_interested: toRead,
});

// update the user's interest in a book - update takes two parameters -
// first one is values which will be used to perform the update, and second one is options
const changeUserInterest = (userID, isbn, toRead) => models.UserBook.update(
  { is_interested: toRead },
  {
    where: {
      userID,
      isbn,
    },
  });

module.exports.insertBook = insertBook;
module.exports.findBook = findBook;
module.exports.createPreferences = createPreferences;
module.exports.updatePreferences = updatePreferences;
module.exports.getPreferences = getPreferences;
module.exports.userBookList = userBookList;
module.exports.createUserBook = createUserBook;
module.exports.changeUserInterest = changeUserInterest;
