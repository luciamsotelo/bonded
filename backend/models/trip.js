// models/Trip.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    static associate(models) {
      // Define association here
      Trip.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
  }

  Trip.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATEONLY,
    participants: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    images: DataTypes.JSONB,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Name of the table
        key: 'id'
      },
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'Trip',
  });

  return Trip;
};
