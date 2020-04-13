const sequelize = require('sequelize')
const router = require('express').Router()
const {Card} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const cards = await Card.findAll()
    res.json(cards)
  } catch (error) {
    next(error)
  }
})

router.get('/random', async (req, res, next) => {
  try {
    const card = await Card.findOne({order: sequelize.literal('random()')})
    res.json(card)
  } catch (error) {
    next(error)
  }
})

router.post('/new', async (req, res, next) => {
  try {
    const {left, right} = req.body
    const card = await Card.create({left, right})
    res.json(card)
  } catch (error) {
    next(error)
  }
})
