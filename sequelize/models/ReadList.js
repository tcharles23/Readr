/* eslint-disable func-names */
const readList = (sequelize, Sequelize) => {
  // creating the fields on the table
  const ReadList = sequelize.define('user', {
    boolean: Sequelize.BOOLEAN,
  });

  ReadList.associate = function (models) {
    // here I'm creating a one to many relationship for the field user_id that that has a foreginkey of id from the user table
    ReadList.belongsTo(models.User, {
      as: 'user_id',
      foreginkey: 'id',
    });
    // here I'm creating a one to many relationship for the field isbn that that has a foreginkey of isbn from the user books
    ReadList.belongsTo(models.Books, {
      foreginkey: 'isbn',
    });
  };

  return ReadList;
};

module.exports.readList = readList;
