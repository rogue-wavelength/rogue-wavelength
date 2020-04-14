/**
 * ACTION TYPES
 */
const ADD_PLAYER = 'ADD_PLAYER'
const REMOVE_PLAYER = 'REMOVE_PLAYER'

/**
 * INITIAL STATE
 */
const initialPlayerList = []

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
      console.log('player added', state)
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
