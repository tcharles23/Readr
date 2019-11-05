/* eslint-disable func-names */
const user = (sequelize, Sequelize) => {
  // creating the table for the user
  const User = sequelize.define('user', {
    username: Sequelize.STRING,
    googleId: Sequelize.STRING,
  });

  // creating the join table for teh followList
  User.associate = function (models) {
    // creating a field called userId that refrence the id from the user table
    User.belongsToMany(models.user, {
      as: 'userId',
      through: 'followList',
      foreginKey: 'id',
    });
    // creating a field called followers that refrence id from the user table
    User.belongsToMany(models.user, {
      as: 'followers',
      through: 'followList',
      foreginKey: 'id',
    });
  };

  return User;
};

module.exports.user = user;
