/**
 * ACTION TYPES
 */
const ADD_PLAYER = 'ADD_PLAYER'
const REMOVE_PLAYER = 'REMOVE_PLAYER'
const MOVE_PLAYER = 'MOVE_PLAYER'
const REBALANCE = 'REBALANCE' // usefulness tbd

/**
 * INITIAL STATE
 */
const initialPlayerList = {
  teamA: {},
  teamB: {},
}

/**
 * ACTION CREATORS
 */
const addPlayer = ({name, id}) => ({type: ADD_PLAYER, name, id})

const removePlayer = (name) => ({type: REMOVE_PLAYER, name})

const movePlayer = (toTeam) => ({type: MOVE_PLAYER, toTeam})

// const rebalance = () => ({type: REBALANCE})

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
      return Object.values(state.teamA).length <=
        Object.values(state.teamB).length
        ? {...state, teamA: {...state.teamA, [action.name]: action.id}}
        : {...state, teamB: {...state.teamB, [action.name]: action.id}}
    case REMOVE_PLAYER: {
      const [[team]] = Object.entries(state).filter(([, v]) =>
        Object.keys(v).includes(action.name)
      )
      const {[action.name]: removed, ...newTeam} = state[team]
      return {...state, [team]: newTeam}
    }
    case MOVE_PLAYER: {
      const [fromTeam] = Object.keys(state).filter((d) => d !== action.toTeam)
      const [playerName] = Object.keys(state[fromTeam])
      const {[playerName]: playerId, ...newFromTeam} = state[fromTeam]
      return {
        [fromTeam]: newFromTeam,
        [action.toTeam]: {...state[action.toTeam], [playerName]: playerId},
      }
    }
    case REBALANCE:
      return state
    // well... this doesn't work, and the task seems very complicated! but we need to make sure
    // that teams stay balanced if people leave. maybe the reducer shouldn't have any logic for that
    // other than moving a specific player from one team to another?
    // case REBALANCE: {
    //   const [teamA, teamB] = Object.values(state).map(d => Object.entries(d))
    //   const [rebalTo, rebalFrom] = teamA.length < teamB.length ? [teamA, teamB] : [teamB, teamA]
    //   while (rebalTo.length < rebalFrom.length - 1) {
    //     const {player, ...rest} = rebalFrom[1]
    //     reb
    //   }
    // }
    default:
      return state
  }
}

module.exports = {
  addPlayer,
  removePlayer,
  movePlayer,
  playerList,
}
