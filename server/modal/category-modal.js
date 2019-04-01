const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const Category = sequelize.define('categorys', {
  id: {
    type: Sequelize.NUMBER,
    // allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  timestamps: false
})

module.exports = Category