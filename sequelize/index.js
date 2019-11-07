const Sequelize = require('sequelize');

require('dotenv').config();

// need to add this so I can create a 
// pull requests for this spefic file

const {
  DATABASE,
  USER_NAME,
  USER_PASSWORD,
  HOST,
  DB_PORT,
} = process.env;

const db = new Sequelize({
  database: DATABASE,
  username: USER_NAME,
  password: USER_PASSWORD,
  host: HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: false,
});

// creating the table for the user
const user = db.define('user', {
  username: Sequelize.STRING,
  googleId: Sequelize.STRING,
});

// creating the table for the books api informations
const books = db.define('books', {
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

// creating the field on the table
const followList = db.define('followList', {
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


// creating the fields on the table
const readList = db.define('readList', {
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
}).catch((err) => { console.log(err); });
