/* eslint-disable func-names */
const books = (sequelize, Sequelize) => {
  // creating the table for the books api informations
  const Books = sequelize.define('user', {
    ISBN: {
      type: Sequelize.STRING,
      unique: true,
    },
    title: {
      type: Sequelize.STRING,
      unique: true,
    },
    Author: Sequelize.STRING,
    Desc: {
      type: Sequelize.STRING,
      unique: true,
    },
    cover: {
      type: Sequelize.STRING,
      unique: true,
    },
    url: {
      type: Sequelize.STRING,
      unique: true,
    },
  });

  return Books;
};

module.exports.books = books;
