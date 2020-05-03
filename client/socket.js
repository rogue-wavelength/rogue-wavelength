import io from 'socket.io-client'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')

  /**
   * DATA FLOW
   * client.emit "joinRoom" {roomCode, Name} => Server
   *    Server takes and assigns person to room
   *    Server Emits "roomPopulate" to people in that room the new list of persons in room
   * client.emit "joinTeam" {roomCode,name,teamName} => Server
   *    Server takes and assigns person to team, emits new team state to everyone in room
   * (this happens in the party component)
   *
   * Button GAME START
   * client.emit "startGame" or something {roomCode} => Server
   *    Server sets first card and TeamA to playing,
   *    Server emits "waiting" + payload (card) that is conditional to TeamA that they are playing,
   *      and TeamB that they are waiting
   *      and to the psychic that they are the psychic
   *  *  psychic receives props to view psychic component
   *    psychic receives card + target as visible
   * psychic takes time to think of input + submits clue
   *
   * client.emit "revealCard" {roomCode} => Server
   *    Server sets card to visible for rest of players
   * server.emit "revealCard" // 'flipping' the card from psychic
   *    server sends clue and card to all players
   *    server sends props to psychic so they can see what other players are seeing
   *    now players are allowed to control slider
   *
   *    players submit their guess:
   * client.emit "guess"
   *    guess is saved on server redux, then server
   *    will send props to allow opposing team to guess
   * server.emit "guessLockedIn"
   *    opposing team now allowed to guess
   *
   * then they will submit their higher/lower guess
   * client.emit "opponentGuess"
   *    server calculates score and then emits
   * server.emit "result"
   *    card, target, clue revealed; score calculatd
   * score updated on front end and back end
   * players can click to proceed with game
   * client.emit "newTurn"
   * card, target, clue cleared out
   * score is maintained
   * new psychic is chosen
   */

  // socket.on('everyone', () => {
  //   console.log('everyone got this message')
  // })

  socket.on('message', function (data) {
    console.log('Incoming message:', data)
  })

  socket.on('psychic', (props) => {
    // test listener for specific player
    console.log('you are the psychic', props)
  })

  socket.on('waiting', (psychicId) => {
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
