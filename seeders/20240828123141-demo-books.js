'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'NodeJS',
        author: 'Kevin Land',
        publishedDate: new Date('2022-10-05 00:00:00'),
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'HTML and CSS',
        author: 'Andrew JR',
        publishedDate: new Date('2022-12-05 00:00:00'),
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'MySQL',
        author: 'Helen Datie',
        publishedDate: new Date('2022-01-03 00:00:00'),
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'JavaScript',
        author: 'Faland Helow',
        publishedDate: new Date('2022-05-22 00:00:00'),
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Python',
        author: 'Daniel Rop',
        publishedDate: new Date('2022-11-05 00:00:00'),
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Java',
        author: 'Robin William',
        publishedDate: new Date('2022-12-28 00:00:00'),
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
