const initialState = []

const SET_USERNAME = 'SET_USERNAME'

export const setUser = (username) => ({type: SET_USERNAME, username})

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return [...state, action.username]
    default:
      return state
  }
}
