const newStore = require('../store')

const lobbyController = {
  lobbies: new Map(),
  addLobby(lobbyString) {
    this.lobbies.set(lobbyString, newStore())
  },
  removeLobby(lobbyString) {
    this.lobbies.delete(lobbyString)
  },
  getLobby(lobbyString) {
    return this.lobbies.get(lobbyString)
  },
  // Not  sure if this is needed, but it would find and return the keys of all lobbies where
  // a given socketId is present-- currently a disconnect dispatches a removePlayer action
  // but only has the socketId at that time-- but is a disconnect the same thing as the player
  // leaving a game?
  // findLobbiesByPlayer(socketId) {
  //     let res = []
  //     for (let [k, v] of this.lobbies.entries()) {
  //     }
  // }
}

module.exports = lobbyController
