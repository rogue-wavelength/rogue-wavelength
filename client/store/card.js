import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_CARDS = 'SET_CARDS'
const ADD_CARD = 'ADD_CARD'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
const setCards = (cards) => ({
  type: SET_CARDS,
  cards,
})

const addCard = (card) => ({
  type: ADD_CARD,
  card,
})

/**
 * THUNK CREATORS
 */
const fetchCards = () => async (dispatch) => {
  const {data} = await axios.get('/api/cards')
  dispatch(setCards(data))
}

const postCard = (card) => async (dispatch) => {
  const {data} = await axios.post('/api/cards/new', card)
  dispatch(addCard(data))
}

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARDS:
      return action.cards
    case ADD_CARD:
      return [...state, action.card]
    default:
      return state
  }
}
