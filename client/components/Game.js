import React from 'react'
import {PlayerView, PsychicView} from './'
const Game = (props) => {
  console.log(props)
  return (
    <div>
      <p>this is the game</p>
      <PlayerView />
      <PsychicView />
    </div>
  )
}

export default Game
