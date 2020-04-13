/**
 * ACTION TYPES
 */
const SET_PSYCHIC = 'SET_PSYCHIC'
const SET_CLUE_CARD_TARGET = 'SET_CLUE_CARD_TARGET'
const SET_TEAM_GUESS = 'SET_TEAM_GUESS'
const SET_OPPONENT_GUESS = 'SET_OPPONENT_GUESS'
const SET_SCORE = 'SET_SCORE'
const CLEAR_ROUND = 'CLEAR_ROUND'
const CLEAR_GAME = 'CLEAR_GAME'

/**
 * INITIAL STATE
 */
const initialPlayerList = {
  psychic: 0, // index of psychic in array
  currentCard: ['first val', 'second val'],
  target: 0, //0 - 100
  clue: '',
  teamGuess: 0, // 0 - 100
  opponentGuess: null, // true: target < teamGuess, false: target > teamGuess
  score: [0, 0], // teamA, teamB
}

/**
 * ACTION CREATORS
 */
const addPlayer = (player) => ({type: ADD_PLAYER, player})

const removePlayer = (player) => ({type: REMOVE_PLAYER, player})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
const playerList = (state = initialPlayerList, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      // console.log('player added', state)
      return [...state, action.player]
    case REMOVE_PLAYER:
      // console.log('player removed', state)
      return state.filter((player) => player !== action.player)
    default:
      return state
  }
}

module.exports = {
  addPlayer,
  removePlayer,
  playerList,
}
