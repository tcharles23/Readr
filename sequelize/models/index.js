const Sequelize = require('sequelize');
// const fs = require('fs');
// const path = require('path');
const { user } = require('./userLogin');
const { books } = require('./book');
const { readList } = require('./ReadList');
const { sequelize } = require('../db');
require('dotenv').config();


const models = {
  user,
  books,
  readList,
};

// fs
//   .readdirSync(__dirname)
//   .filter((file) => {
//     return (file.indexOf('.') !== 0) && (file !== 'index.js');
//   })
//   .forEach((file) => {
//     const model = sequelize.import(path.join(__dirname, file));
//     models[model.name] = model;
//   });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.sequelize = sequelize;
module.Sequelize = Sequelize;

module.exports = models;
