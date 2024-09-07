'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define association here
      User.hasMany(models.Trip, { foreignKey: 'userId', as: 'trips' });
    }

    // Method to hash the password before saving
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    familyName: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    tripCode: DataTypes.STRING,
    description: DataTypes.TEXT,
    dateOfTrip: DataTypes.DATEONLY,
    ratings: DataTypes.INTEGER,
    images: DataTypes.JSONB,
    vacationLocation: DataTypes.STRING // Added vacationLocation attribute
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      // Before saving the user, hash the password if it has been modified
      beforeSave: async (user) => {
        if (user.changed('password')) {
          await user.hashPassword();
        }
      }
    }
  });

  return User;
};
