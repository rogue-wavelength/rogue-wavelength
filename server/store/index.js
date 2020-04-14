const {createStore, combineReducers, applyMiddleware} = require('redux')
const {playerList} = require('./playerList')
const {game} = require('./game')

const reducer = combineReducers({playerList, game})

const store = createStore(reducer)

module.exports = store

//server side state
// const serverState = {
//   playerList: [{name: 'name', socketId: 'socketId', room: 'room'}],
//   VIAN: {teamA: [{}],
//   teamB: [{}],
//   psychic: 0, // index of psychic in array
//   currentCard: ['first val', 'second val'],
//   target: 0, //0 - 100
//   clue: '',
//   teamGuess: 0, // 0 - 100
//   opponentGuess: true, // true: target < teamGuess, false: target > teamGuess
//   score: [0, 0], // teamA, teamB}}

//   TRAV: {}

//   game: {
//     CODE: {
//       teamA: [{}],
//       teamB: [{}],
//       psychic: 0, // index of psychic in array
//       currentCard: ['first val', 'second val'],
//       target: 0, //0 - 100
//       clue: '',
//       teamGuess: 0, // 0 - 100
//       opponentGuess: true, // true: target < teamGuess, false: target > teamGuess
//       score: [0, 0], // teamA, teamB}
//       /**
//        *
//        * game subreducer
//        * init = roomCode => {
//        *  creates game object
//        * {
//             psychic: 0, // index of psychic in array
//             currentCard: ['first val', 'second val'],
//             target: 0, //0 - 100
//             clue: '',
//             teamGuess: 0, // 0 - 100
//             opponentGuess: true, // true: target < teamGuess, false: target > teamGuess
//             score: [0, 0], // teamA, teamB}
//           }
//       * }
//       */
//     },
//   },
// }
