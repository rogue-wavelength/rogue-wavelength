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
    </div>
  )
}

export default Game
