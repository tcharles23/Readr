const models = require('../models');

const readList = (sequelize, Sequelize) => {
  // creating the fields on the table
  const ReadList = sequelize.define('ReadList', {
    boolean: Sequelize.BOOLEAN,
    id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    isbn: {
      type: Sequelize.INTEGER,
      references: {
        model: 'books',
        key: 'isbn',
      },
      unique: true,
    },
  });

  // here I'm creating a one to many relationship for the field user_id that that
  // has a foreginkey of id from the user table
  ReadList.belongsTo(models.User);
  // here I'm creating a one to many relationship for the field isbn that
  // that has a foreginkey of isbn from the user books
  ReadList.belongsTo(models.Books);

  return readList;
};

module.exports.readList = readList;
