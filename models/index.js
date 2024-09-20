'use strict';
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('bookstore', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = require('./user')(sequelize);
const Book = require('./book')(sequelize);

User.hasMany(Book, { foreignKey: 'userId' });
Book.belongsTo(User, { foreignKey: 'userId' });

module.exports = { sequelize, User, Book };
