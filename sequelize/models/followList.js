const models = require('../models');

const followList = (sequelize, Sequelize) => {
  // creating the fields on the table
  const FollowList = sequelize.define('FollowList', {
    id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    followers: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  });

  // here I'm creating a one to many relationship for the field user_id that that
  // has a foreginkey of id from the user table
  FollowList.belongsTo(models.User);


  return FollowList;
};

module.exports.followList = followList;
