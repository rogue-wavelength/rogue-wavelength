const {addPlayer, removePlayer} = require('../store/playerList')
const lc = require('../lobby')
const sequelize = require('sequelize')
const {Card} = require('../db/models')

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

    socket.on('startGame', async (room) => {
      console.log('game is starting', room)
      // addLobby(room)
      /**
       * gets random card
       * the values we care about can be accessed by
       * card.left and card.right
       */
      const card = await Card.findOne({order: sequelize.literal('random()')})

      const wheel = Math.floor(Math.random() * 100)

      // io.sockets.in(room).emit('message', 'whats up peeps?')
      // determine first psychic and emit 'waiting' to all others
      /**
       * Emit 'waiting' to everyone in the room
       */
      // socket.emit('waiting', lc.getLobby(room).getState().game.psychic)

      /**
       * Emit 'psychic' to just the psychic
       * with card and wheel data (random number between 0 and 100)
       */
      // socket
      //   .to(getLobby.getState().playerList[0])
      //   .emit('psychic', {card, wheel})
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
