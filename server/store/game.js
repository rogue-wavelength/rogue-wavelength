/* eslint-disable complexity */
const ADD_GAME = 'ADD_GAME'
const ADD_PLAYER = 'ADD_PLAYER'
const NEXT_PSYCHIC = 'NEXT_PSYCHIC'
const SET_CLUE_CARD_TARGET = 'SET_CLUE_CARD_TARGET'
const SET_TEAM_GUESS = 'SET_TEAM_GUESS'
const SET_OPPONENT_GUESS = 'SET_OPPONENT_GUESS'
const SET_SCORE = 'SET_SCORE'
const SET_UP_NEXT_ROUND = 'SET_UP_NEXT_ROUND'
const CLEAR_GAME = 'CLEAR_GAME'

const initialGameState = {
  teamA: [],
  teamB: [],
  psychicQueue: [],
  psychic: {}, // player object
  currentCard: ['first val', 'second val'],
  target: 0, //0 - 100
  clue: '',
  teamGuess: 0, // 0 - 100
  opponentGuess: null, // true: target < teamGuess, false: target > teamGuess
  score: [0, 0], // teamA, teamB
}

const addGame = (roomCode) => ({
  type: ADD_GAME,
  roomCode,
})

const addPlayerToGame = (roomCode, player) => {
  // adds player to a team based on team balance
  return {
    type: ADD_PLAYER,
    roomCode,
    player,
  }
}

const setNextPsychic = (roomCode) => {
  return {
    type: NEXT_PSYCHIC,
    roomCode,
  }
}

const setClueCardTarget = (roomCode, clue, card, target) => ({
  type: SET_CLUE_CARD_TARGET,
  roomCode,
  clue,
  card,
  target,
})

const setTeamGuess = (roomCode, teamGuess) => ({
  type: SET_TEAM_GUESS,
  roomCode,
  teamGuess,
})

const setOpponentGuess = (roomCode, opponentGuess) => ({
  type: SET_OPPONENT_GUESS,
  roomCode,
  opponentGuess,
})

const setScore = (roomCode, score) => ({type: SET_SCORE, roomCode, score})

const setUpNextRound = (roomCode) => ({type: SET_UP_NEXT_ROUND, roomCode})

const clearGame = (roomCode) => ({type: CLEAR_GAME, roomCode})

const game = (state = {}, action) => {
  const {roomCode} = action
  switch (action.type) {
    case ADD_GAME:
      return {...state, [roomCode]: initialGameState}
    case ADD_PLAYER:
      return state[roomCode].teamA.length <= state[roomCode].teamB.length
        ? {
            ...state,
            [roomCode]: {
              ...state[roomCode],
              psychicQueue: [...state[roomCode].psychicQueue, action.player],
              teamA: [...state[roomCode].teamA, action.player],
            },
          }
        : {
            ...state,
            [roomCode]: {
              ...state[roomCode],
              psychicQueue: [...state[roomCode].psychicQueue, action.player],
              teamB: [...state[roomCode].teamB, action.player],
            },
          }
    case NEXT_PSYCHIC:
      const newQueue = [...state[roomCode].psychicQueue]
      const next = newQueue.shift()
      newQueue.push(next)
      return {
        ...state,
        [roomCode]: {...state[roomCode], psychicQueue: newQueue, psychic: next},
      }
    case SET_CLUE_CARD_TARGET:
      // a single action because only set by psychic once per round
      return {
        ...state,
        [roomCode]: {
          ...state[roomCode],
          currentCard: action.card,
          target: action.target,
          clue: action.clue,
        },
      }
    case SET_TEAM_GUESS:
      return {
        ...state,
        [roomCode]: {
          ...state[roomCode],
          teamGuess: action.teamGuess,
        },
      }
    case SET_OPPONENT_GUESS:
      return {
        ...state,
        [roomCode]: {
          ...state[roomCode],
          opponentGuess: action.opponentGuess,
        },
      }
    case SET_SCORE:
      return {
        ...state,
        [roomCode]: {
          ...state[roomCode],
          score: action.score,
        },
      }
    case SET_UP_NEXT_ROUND:
      //clears game state, increments psychic, keeps score
      return {
        ...state,
        [roomCode]: {
          ...initialGameState,
          score: state.score,
        },
      }
    case CLEAR_GAME:
      return {
        ...state,
        [roomCode]: initialGameState,
      }
    default:
      return state
  }
}

module.exports = {
  game,
  addGame,
  addPlayerToGame,
  setNextPsychic,
  setClueCardTarget,
  setTeamGuess,
  setOpponentGuess,
  setScore,
  setUpNextRound,
  clearGame,
}
