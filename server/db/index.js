const Sequelize = require('sequelize');


const db = new Sequelize('postgres', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = db.define('User', {
  username: Sequelize.STRING,
  googleId: Sequelize.STRING,
});

db.sync({ force: true });

module.exports.db = db;
module.exports.User = User;
