const store = require('../store')
const {addPlayer, removePlayer} = require('../store/playerList')

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    // add player to back end redux state
    store.dispatch(addPlayer(socket.id)) // associate socket id with user id?? with session id?

    // send message to everyone
    socket.emit('everyone')

    socket.on('game', (props) => {
      console.log('game clicked server', props.stuff)
      // start game?
      // determine first psychic and emit 'waiting'

      // send message to just one user (test case)
      socket
        .to(store.getState().playerList[0])
        .emit('hi', 'this is the second argument')
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
      store.dispatch(removePlayer(socket.id)) // re-evaluate this...
    })
  })
}
