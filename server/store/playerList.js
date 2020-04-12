/**
 * ACTION TYPES
 */
const ADD_PLAYER = 'ADD_PLAYER'

/**
 * INITIAL STATE
 */
const initialPlayerList = []

/**
 * ACTION CREATORS
 */
const addPlayer = (player) => ({type: ADD_PLAYER, player})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
const playerList = (state = initialPlayerList, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      console.log('add player', state)
      return [...state, action.player]
    default:
      return state
  }
}

module.exports = {
  addPlayer,
  playerList,
}
