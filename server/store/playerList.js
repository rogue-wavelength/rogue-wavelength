/**
 * ACTION TYPES
 */
const ADD_PLAYER = 'ADD_PLAYER'
const REMOVE_PLAYER = 'REMOVE_PLAYER'

/**
 * INITIAL STATE
 */
const initialPlayerList = {}

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
    // NOTE: this currently uses the player's name as a key. Knowing us, we're all going to set our names
    // as "Yena", so maybe either have a duplicate checking feature and append a number to the end of the name
    // or use a sessionId from the cookie?
    case ADD_PLAYER:
      return {...state, [action.player.name]: action.player.id}
    case REMOVE_PLAYER:
      const {[action.player.name]: removed, ...newState} = state
      return newState
    default:
      return state
  }
}

module.exports = {
  addPlayer,
  removePlayer,
  playerList,
}
