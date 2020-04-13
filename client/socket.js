import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')

  socket.on('everyone', () => {
    console.log('everyone got this message')
  })

  socket.on('hi', (props) => {
    // test listener for specific player
    console.log('omg hi', props)
  })

  socket.on('waiting', () => {
    console.log('waiting for psychic to choose card and clue')
    // players should see playerview - empty + 'please wait' message
    // psychic should see psychic view
    // psychic on submit will emit 'flip' event
  })

  socket.on('flipped', (cardData) => {
    console.log('should receive card + clue from psychic')
    // all players should view same playerView component
    // players should be able to interact with slider according to role
    // players should be able to submit guess and emit 'guess'
  })

  socket.on('guessLockedIn', (teamGuess) => {
    console.log('should allow opposing team to guess higher or lower')
    // playerView should now have a 'higher/lower' button available to
    // just opponents
    // which, upon submit, should emit 'opponentGuess' + guess as payload
  })

  socket.on('result', (data) => {
    console.log('should update scores and reveal actual value')
    // take data and save to front end redux
    // calculate and reflect results/score
    // upon submit, emit 'newTurn'
  })
})

export default socket
