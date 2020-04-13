const db = require('./db')

// register models
const {Card, User} = require('./models')

module.exports = {db, Card, User}
