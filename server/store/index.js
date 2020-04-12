const {createStore, combineReducers, applyMiddleware} = require('redux')
const {playerList} = require('./playerList')

const reducer = combineReducers({playerList})

const store = createStore(reducer)

module.exports = store

//server side state
const serverState = {
  playerList: [],
  psychic: 0,
  currentCard: ['first val', 'second val'],
  target: 0, //0 - 100
  clue: '',
  teamGuess: 0, // 0 - 100
  opponentGuess: true, // true: target < teamGuess, false: target > teamGuess
  score: [0, 0], // teamA, teamB
}
