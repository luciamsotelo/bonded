'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trips', [
      {
        title: 'Summer Vacation 2023',
        description: 'A wonderful summer trip to the beach.',
        date: '2023-06-15',
        participants: 'Smith Family',
        rating: 5,
        images: JSON.stringify(['image1.jpg', 'image2.jpg']),
        userId: 1, // Replace with the appropriate userId
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Winter Ski Trip',
        description: 'Skiing in the Alps with the family.',
        date: '2024-01-10',
        participants: 'Johnson Family',
        rating: 4,
        images: JSON.stringify(['ski1.jpg', 'ski2.jpg']),
        userId: 2, // Replace with the appropriate userId
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trips', null, {});
  }
};
