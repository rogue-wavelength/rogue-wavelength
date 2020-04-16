const {createStore, combineReducers, applyMiddleware} = require('redux')
const {playerList} = require('./playerList')
const {game} = require('./game')

const newStore = function () {
  const reducer = combineReducers({playerList, game})
  return createStore(reducer)
}

module.exports = newStore

//server side state
const serverState = {
  playerList: [{name: '', socketId: '', room: ''}],
  game: {
    CODE: {
      teamA: [{}],
      teamB: [{}],
      psychic: 0, // index of psychic in array
      currentCard: ['first val', 'second val'],
      target: 0, //0 - 100
      clue: '',
      teamGuess: 0, // 0 - 100
      opponentGuess: true, // true: target < teamGuess, false: target > teamGuess
      score: [0, 0], // teamA, teamB}
      /**
 *
 * game subreducer
 * init = roomCode => {
 *  creates game object
 * {
      psychic: 0, // index of psychic in array
      currentCard: ['first val', 'second val'],
      target: 0, //0 - 100
      clue: '',
      teamGuess: 0, // 0 - 100
      opponentGuess: true, // true: target < teamGuess, false: target > teamGuess
      score: [0, 0], // teamA, teamB}
    }
 * }
 */
    },
  },
}
