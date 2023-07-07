import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

export const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  ratings: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});
