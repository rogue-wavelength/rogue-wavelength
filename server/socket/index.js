const store = require('../store')
const {addPlayer} = require('../store/playerList')

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)
    store.dispatch(addPlayer(socket.id))

    // send message to everyone
    socket.emit('everyone')

    socket.on('game', (props) => {
      console.log('game clicked server', props.stuff)
      // send message to just one user (test case)
      socket
        .to(store.getState().playerList[0])
        .emit('hi', 'this is the second argument')
    })

    socket.on('flip', (props) => {
      console.log('flip happened', props)
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
