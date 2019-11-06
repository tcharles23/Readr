const Sequelize = require('sequelize');
// const { user } = require('./user');
// const { books } = require('./book');
// const { readList } = require('./ReadList');
// const { followList } = require('./followList');
// const { db } = require('../db');
require('dotenv').config();

// need to add this so I can create a pull request for this spefic file

const {
  DATABASE,
  HOST,
  DB_PORT,
} = process.env;

const db = new Sequelize(DATABASE, "macbook", "Terefe",
  {
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
    logging: false,
  });


// creating the table for the books api informations
const books = db.define("books", {
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

// creating the fields on the table
const followList = db.define("followList", {
  id: {
    type: Sequelize.INTEGER,
    // `references: {
    //   model: 'user',
    //   key: 'id',
    // },`
    primaryKey: true,
  },
  followers: {
    type: Sequelize.INTEGER,
    // references: {
    //   model: 'user',
    //   key: 'id',
    // },
  },
});

// creating the table for the user
const user = db.define("user", {
  username: Sequelize.STRING,
  googleId: Sequelize.STRING,
});

// creating the fields on the table
const readList = db.define("readList", {
  boolean: Sequelize.BOOLEAN,
  id: {
    type: Sequelize.INTEGER,
    // references: {
    //   model: 'user',
    //   key: 'id',
    // },
    primaryKey: true,
  },
  isbn: {
    type: Sequelize.INTEGER,
    // references: {
    //   model: 'books',
    //   key: 'isbn',
    // },
    unique: true,
  },
});

db.sync().then(() => {
  console.log('connected to database');
})


// module.exports.db = db;
// module.exports.user = user;
// module.exports.books = books;
// module.exports.readList = readList;
// module.exports.followList = followList;
// const models = {
//   user,
//   books,
//   readList,
//   followList,
// };

// models.user.sync();
// models.books.sync();
// models.readList.sync();
// models.followList.sync();
