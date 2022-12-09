const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')

const saltRounds = 10

class User extends Model {
  async checkPassword(password) {
    return await bcrypt.compare(password, this.password)
  }
}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
}, { 
  hooks: {
    beforeCreate: async function(newUser) {
      newUser.username = newUser.username.toLowerCase()
      newUser.email = newUser.email.toLowerCase()
      newUser.password = await bcrypt.hash(newUser.password, saltRounds)
      return newUser
    },
    beforeUpdate: async function(updatedUser) {
      if (updatedUser.username)
        updatedUser.username = updatedUser.username.toLowerCase()
      if (updatedUser.email) 
        updatedUser.email = updatedUser.email.toLowerCase()
      if (updatedUser.password)
        updatedUser.password = await bcrypt.hash(updatedUser.password, saltRounds)
      return updatedUser
    }
  },
  sequelize 
})

module.exports = User