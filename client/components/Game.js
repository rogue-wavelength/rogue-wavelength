import React from 'react'
import {PlayerView, PsychicView} from './'
import socket from '../socket'
const Game = (props) => {
  console.log(props)
  const handleClick = (evt) => {
    socket.emit('game', {stuff: 123})
  }
  return (
    <div>
      <p>this is the game</p>
      <button onClick={handleClick}>hi</button>
      <PlayerView />
      <PsychicView />
      <h3>Scores</h3>
      <table>
        <thead></thead>
        <tr>
          <td>Team A</td>
          <td>0</td>
          {/* {map statement of team members. even - team a, odd - team b} */}
        </tr>
        <tr>
          <td>Team B</td>
          <td>0</td>
        </tr>
      </table>
    </div>
  )
}

export default Game
