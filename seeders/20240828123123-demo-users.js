'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        fullName: 'Khai Nguyen',
        username: 'khainguyen',
        email: 'khainguyen@gmail.com',
        iam_role: 'admin',
        hash_pwd: 'faw#%@%af',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Khanh Ngoc',
        username: 'khanhngoc',
        email: 'khanhngoc@gmail.com',
        iam_role: 'moderator',
        hash_pwd: 'ghawdf^!$61@$!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: 'Binh Nguyen',
        username: 'binhnguyen',
        email: 'binhnguyen@gmail.com',
        iam_role: 'member',
        hash_pwd: '#!gat$@#af%',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
