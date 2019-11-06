const models = require('../models');

const user = (sequelize, Sequelize) => {
  // creating the table for the user
  const User = sequelize.define('User', {
    username: Sequelize.STRING,
    googleId: Sequelize.STRING,
  });


  // creating a field called followers that refrence id from the user table
  User.belongsToMany(models.followList);
  // creating a field called followers that refrence id from the user table
  User.belongsToMany(models.readlist);

  return User;
};

module.exports.user = user;
