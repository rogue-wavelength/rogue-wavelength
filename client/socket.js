import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')

  socket.on('everyone', () => {
    console.log('everyone got this message')
  })

  socket.on('hi', (props) => {
    console.log('omg hi', props)
  })
})

export default socket
