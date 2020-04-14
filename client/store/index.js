import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import game from './game'
import card from './card'

const reducer = combineReducers({game, user, card})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'

const targetInitialState = {
  game: {
    isPsychic: true, //boolean whether this user is the psychic
    clue: '',
    card: ['', ''],
    teamGuess: 0,
    score: [],
    target: null, // only a number if isPsychic is true}
  },
  cards: [],
}

/**
 *
 *
 *
 *
 *
 *
 *
 */
