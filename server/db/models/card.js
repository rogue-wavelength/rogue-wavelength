const Sequelize = require('sequelize')
const db = require('../db')

const Card = db.define('card', {
  left: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  right: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Card
