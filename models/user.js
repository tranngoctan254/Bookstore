'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}
  
  User.init({
    fullName: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        len: [3, 25]
      }
    },
    username: {
      type: DataTypes.STRING(12),
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 12]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    iam_role: {
      type: DataTypes.ENUM('admin', 'moderator', 'member'),
      allowNull: false
    },
    hash_pwd: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true
  });
  
  return User;
};
