'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        familyName: 'Doe Family',
        email: 'john.doe@example.com',
        password: 'hashed_password', // Make sure to hash passwords in your actual implementation
        tripCode: 'ABC123',
        description: 'Family vacation to a beautiful location',
        dateOfTrip: '2023-06-01',
        ratings: 5,
        images: JSON.stringify([
          { imageUrl: 'https://example.com/image1.jpg' },
          { imageUrl: 'https://example.com/image2.jpg' },
          { imageUrl: 'https://example.com/image3.jpg' }
        ]),
        vacationLocation: 'Hawaii',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        familyName: 'Smith Family',
        email: 'jane.smith@example.com',
        password: 'hashed_password',
        tripCode: 'XYZ456',
        description: 'Memorable trip with friends',
        dateOfTrip: '2023-07-15',
        ratings: 4,
        images: JSON.stringify([
          { imageUrl: 'https://example.com/image4.jpg' },
          { imageUrl: 'https://example.com/image5.jpg' }
        ]),
        vacationLocation: 'Maldives',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
