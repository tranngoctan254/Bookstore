'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Book extends Model {}
  
  Book.init({
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [3, 50]
      }
    },
    author: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        len: [3, 30]
      }
    },
    publishedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'Books',
    timestamps: true
  });
  
  return Book;
};
