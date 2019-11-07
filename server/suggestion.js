// File to deal with suggestion algorithm

const axios = require('axios');

// Pass in given category and offset number to get books
const categorySearch = (category, offset) => axios.get(`http://openlibrary.org/subjects/${category}.json`, {
  params: {
    limit: 10,
    offset,
  },
})
  .then((books) => books.data)
  .catch((err) => {
    console.error(err);
  });

// Pass in object of categories {comedy: .87, romance:.40}
// Return random category
const selectCategory = (bookPreference) => {
  let returnCat;
  const categories = Object.keys(bookPreference);
  // Add all weight numbers for each category
  const totalWeight = categories.reduce((total, key) => total + bookPreference[key], 0);

  // create random number between 0 and totalWeight
  const randomCatNum = Math.random() * totalWeight;

  let rangeMin = 0;
  categories.forEach((category) => {
    const rangeMax = rangeMin + bookPreference[category];
    if (randomCatNum > rangeMin && randomCatNum < rangeMax) {
      returnCat = category;
    }
    rangeMin = rangeMax;
  });

  return returnCat;
};

// Pass in max books from search
// Return random number with that as max
const selectBook = (maxNumber) => Math.floor(Math.random() * Math.floor(maxNumber));

module.exports.categorySearch = categorySearch;
module.exports.selectCategory = selectCategory;
module.exports.selectBook = selectBook;
