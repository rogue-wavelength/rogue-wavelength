import React from 'react'
import {PlayerView, PsychicView, TeamList, MainDisplay} from './'
import socket from '../socket'

const teamA = ['Jasmine', 'Antanas', 'a duck']
const teamB = ['Lihan', 'Crispy', 'Yena', 'Jonathan']
const psychic = 'Jasmine'

const Game = (props) => {
  console.log(props)
  var room = props.match.params.id

  const handleClick = (evt) => {
    socket.emit('game', room)
  }

  return (
    <div>
      {/* <p>this is the game</p> */}
      <button type="button" onClick={handleClick}>
        Test A Message
      </button>
      <div className="grid-container">
        <TeamList team={teamA} psychic={psychic} />
        <MainDisplay />
        <TeamList team={teamB} psychic={psychic} />
      </div>
      {/* <PlayerView /> */}
      {/* <PsychicView /> */}
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
