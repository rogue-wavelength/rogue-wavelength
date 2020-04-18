const {makeStore} = require('../store')

class Lobby {
  constructor(code) {
    // this makes individual stores for each room
    this.store = makeStore()
    this.code = code
  }

  /**
   * Methods
   */

  dispatch(action) {
    return this.store.dispatch(action)
  }
}

export default Lobby
