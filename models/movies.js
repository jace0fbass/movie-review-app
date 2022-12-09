const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')

class Movie extends Model {}

Movie.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize
})

module.exports = Movie