const {addPlayer, removePlayer} = require('../store/playerList')
const lc = require('../game/lobby')

module.exports = (io) => {
  io.on('connect', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    socket.on('room', (room) => {
      socket.join(room)
      if (!lc.getLobby(room)) lc.addLobby(room)
      console.log(`${socket.id} joined ${room}`)
      console.log(lc.getLobby(room).getState().playerList)
    })

    socket.on('joinRoom', (data) => {
      socket.join(data.room)
      console.log('joined ' + data.room)
      lc.getLobby(room).dispatch(addPlayer({name: data.name, id: socket.id}))
      //store.dispatch(addPlayer({name: data.name, id: socket.id})) // associate socket id with user id?? with session id?
    })
    // add player to back end redux state

    // send message to everyone
    // socket.emit('everyone')

    socket.on('game', (room) => {
      console.log('game clicked server', room)
      addLobby(room)

      io.sockets.in(room).emit('message', 'whats up peeps?')
      // start game?
      // determine first psychic (initial state has it at 0 already) and emit 'waiting'
      socket.emit('waiting', lc.getLobby(room).getState().game.psychic)

      // send message to just one user (test case)
      // socket
      //   .to(getLobby.getState().playerList[0])
      //   .emit('hi', 'this is the second argument')
    })

    socket.on('flip', (cardData) => {
      console.log('flip happened', cardData)
      // cardData should be stored in redux on back end
      // cardData should be sent out to all players (clue + card only)
      // sent out using emit 'flipped'
    })

    socket.on('guess', (guess) => {
      console.log('team submitted guess')
      // guess saved to back end redux as teamGuess
      // should emit 'guessLockedIn' with teamGuess as payload
    })

    socket.on('opponentGuess', (props) => {
      console.log('opponent submitted guess')
      // opponentGuess saved to back end redux
      // calculate score
      // should emit 'result' with payload: clue, target, teamguess, opponentguess
    })

    socket.on('newTurn', () => {
      console.log('teams ready to continue')
      // clear out back end redux except for score, increment current psychic
      // then emit 'waiting' + gameData
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
      // I don't think a socket disconnecting is the same thing as a player leaving a room.
      // getLobby.dispatch(removePlayer(socket.id)) // re-evaluate this...
    })
  })
}
