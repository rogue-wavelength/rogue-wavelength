import React, {useEffect} from 'react'
import {PlayerView, PsychicView, TeamList, MainDisplay} from './'
import socket from '../socket'
import {useSelector} from 'react-redux'
import Party from '../components/Party'

const teamA = ['Jasmine', 'Antanas', 'a duck']
const teamB = ['Lihan', 'Crispy', 'Yena', 'Jonathan']
const psychic = 'Jasmine'

const Game = (props) => {
  var room = props.match.params.id

  const roomUsers = useSelector((state) => state.username)
  console.log(roomUsers)

  // join room on load in case you navigated via a link
  useEffect(() => {
    // socket.emit('joinRoom', {room, name})
  }, [])

  // const handleClick = (evt) => {
  //   socket.emit('game', room)
  // }

  return (
    <div>
      {/* <p>Your game room is: {props.match.params.id}</p>
      <button type="button" onClick={handleClick}>
        Start Game
      </button> */}
      <div className="grid-container">
        <TeamList team={teamA} psychic={psychic}>
          {teamA.map((player, i) => {
            if (psychic === player) {
              return (
                <div key={i} className="player-card psychic">
                  {player}
                </div>
              )
            } else {
              return (
                <div key={i} className="player-card">
                  {player}
                </div>
              )
            }
          })}
        </TeamList>
        <MainDisplay />
        <TeamList team={teamB} psychic={psychic} />
      </div>
    </div>
  )
}

export default Game

/* <h3>Scores</h3>
<table>
  <thead></thead>
  <tbody>
    <tr>
      <td>Team A</td>
      <td>0</td>
      {{map statement of team members. even - team a, odd - team b}}
    </tr>
    <tr>
      <td>Team B</td>
      <td>0</td>
    </tr>
  </tbody>
</table> */
