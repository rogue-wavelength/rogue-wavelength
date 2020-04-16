/**
 * ACTION TYPES
 */
const SET_PSYCHIC = 'SET_PSYCHIC'
const SET_CLUE_CARD_TARGET = 'SET_CLUE_CARD_TARGET'
const SET_TEAM_GUESS = 'SET_TEAM_GUESS'
const SET_OPPONENT_GUESS = 'SET_OPPONENT_GUESS'
const SET_SCORE = 'SET_SCORE'
const INCREASE_SCORE = 'INCREASE_SCORE'
const SET_UP_NEXT_ROUND = 'SET_UP_NEXT_ROUND'
const CLEAR_GAME = 'CLEAR_GAME'

/**
 * INITIAL STATE
 * @member {string} psychic the name of the current psychic
 * @member {string[]} currentCard a tuple of the left and right values of the card
 * @member {number} target [0-100] the middle value of the spinner
 * @member {string} clue the current psychic's clue to their team
 * @member {string} teamGuess [0-100] the current team's submitted guess
 * @member {boolean} opponentGuess true: target < teamGuess, false: target > teamGuess
 * @member {number[]} score a tuple of [teamA score, teamB score]
 */
const initialGameState = {
  psychic: '',
  currentCard: ['left val', 'right val'],
  target: 0,
  clue: '',
  teamGuess: 0,
  opponentGuess: null,
  score: [0, 0],
}

/**
 * ACTION CREATORS
 */
const setPsychic = (psychic) => ({type: SET_PSYCHIC, psychic})
const setClueCardTarget = (clue, card, target) => ({
  type: SET_CLUE_CARD_TARGET,
  clue,
  card,
  target,
})
const setTeamGuess = (teamGuess) => ({type: SET_TEAM_GUESS, teamGuess})
const setOpponentGuess = (opponentGuess) => ({
  type: SET_OPPONENT_GUESS,
  opponentGuess,
})
const setScore = (score) => ({type: SET_SCORE, score})
const increaseScore = (points, team) => ({type: INCREASE_SCORE, points, team})
const setUpNextRound = () => ({type: SET_UP_NEXT_ROUND})
const clearGame = () => ({type: CLEAR_GAME})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
const game = (state = initialGameState, action) => {
  switch (action.type) {
    case SET_PSYCHIC:
      // unsure if necessary considering SET_UP_NEXT_ROUND
      return {...state, psychic: action.psychic}
    case SET_CLUE_CARD_TARGET:
      // a single action because only set by psychic once per round
      return {
        ...state,
        currentCard: action.card,
        target: action.target,
        clue: action.clue,
      }
    case SET_TEAM_GUESS:
      return {...state, teamGuess: action.teamGuess}
    case SET_OPPONENT_GUESS:
      return {...state, opponentGuess: action.opponentGuess}
    case SET_SCORE:
      return {...state, score: action.score}
    case INCREASE_SCORE:
      return {
        ...state,
        score: state.score.map((s, i) =>
          i === action.team ? s + action.points : s
        ),
      }
    case SET_UP_NEXT_ROUND:
      //clears game state, increments psychic, keeps score
      return {
        ...initialGameState,
        psychic: state.psychic + 1,
        score: state.score,
      }
    case CLEAR_GAME:
      return initialGameState
    default:
      return state
  }
}

module.exports = {
  game,
  setPsychic,
  setClueCardTarget,
  setTeamGuess,
  setOpponentGuess,
  setScore,
  setUpNextRound,
  clearGame,
}
