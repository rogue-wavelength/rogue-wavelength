import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PSYCHIC = 'SET_PSYCHIC'
const SET_CLUE = 'SET_CLUE'
const SET_CARD = 'SET_CARD'
const SET_TEAM_GUESS = 'SET_TEAM_GUESS'
const SET_SCORE = 'SET_SCORE'
const SET_TARGET = 'SET_TARGET'

/**
 * INITIAL STATE
 */
const initialState = {
  isPsychic: true, //boolean whether this user is the psychic
  clue: '',
  card: ['', ''],
  teamGuess: 0,
  score: [0, 0],
  target: null, // only a number if isPsychic is true}
}

/**
 * ACTION CREATORS
 */
export const setPsychic = (psychic) => ({
  type: SET_PSYCHIC,
  psychic,
})

export const setClue = (clue) => ({
  type: SET_CLUE,
  clue,
})

const setCard = (card) => ({
  type: SET_CARD,
  card,
})

export const setTeamGuess = (teamGuess) => ({
  type: SET_TEAM_GUESS,
  teamGuess,
})

export const setScore = (score) => ({
  type: SET_SCORE,
  score,
})

export const setTarget = (target) => ({
  type: SET_TARGET,
  target,
})

/**
 * THUNK CREATORS
 */
export const fetchRandomCard = () => async (dispatch) => {
  const {data} = await axios.get('/api/cards/random')
  dispatch(setCard(data))
}

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PSYCHIC:
      return {...state, isPsychic: action.psychic}
    case SET_CLUE:
      return {...state, clue: action.clue}
    case SET_CARD:
      return {...state, card: action.card}
    case SET_TEAM_GUESS:
      return {...state, teamGuess: action.teamGuess}
    case SET_SCORE:
      return {...state, score: action.score}
    case SET_TARGET:
      return {...state, target: action.target}
    default:
      return state
  }
}
