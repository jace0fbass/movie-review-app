const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')

class Review extends Model {}

Review.init({
  review: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [10, 1000]
    }
  }, 
  movie_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'movies',
      key: 'id'
    }
  }
}, { sequelize })

module.exports = Review