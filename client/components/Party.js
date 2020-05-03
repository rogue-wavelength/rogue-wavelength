import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import socket from '../socket'

const Party = (props) => {
  const players = useSelector((state) => state.playerList)
  const handleReadyUp = () => {
    props.history.push(`/game/${props.match.params.id}/play`)
    socket.emit('game', props.match.params.id)
  }

  return (
    <div>
      {`Your game room is ${props.match.params.id}`}
      {console.log(players)}
      {players
        ? [players].map((player, idx) => {
            return <div key={`P-${idx}`}>{`Hey I am player, ${player}`}</div>
          })
        : null}
      <button type="button" onClick={handleReadyUp}>
        All Players Ready!
      </button>
    </div>
  )
}

export default Party
