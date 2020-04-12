module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('game', (props) => {
      console.log('game clicked server', props.stuff)
    })

    socket.on('flip', (props) => {
      console.log('flip happened', props)
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
