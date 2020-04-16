const {createStore, combineReducers, applyMiddleware} = require('redux')
const {playerList} = require('./playerList')
const {game} = require('./game')

const newStore = function () {
  const reducer = combineReducers({playerList, game})
  return createStore(reducer)
}

module.exports = newStore
