const models = require('../models');

const books = (sequelize, Sequelize) => {
  // creating the table for the books api informations
  const Books = sequelize.define('Books', {
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

  // creating a field called id that refrence id from the Books table
  Books.belongsToMany(models.readlist);


  return Books;
};

module.exports.books = books;
