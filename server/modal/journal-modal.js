const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const Journal = sequelize.define('journal', {
  id: {
    type: Sequelize.NUMBER,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.NUMBER,
    allowNull: false,
    defaultValue: 0
  },
  tags: {
    type: Sequelize.STRING
  },
  img_url: {
    type: Sequelize.STRING
  },
  desc: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  create_date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  timestamps: false
})

module.exports = Journal