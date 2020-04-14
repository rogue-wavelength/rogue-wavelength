import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import socket from '../socket'

const Party = (props) => {
  const players = useSelector((state) => state.playerList)
  const handleReadyUp = () => {
    props.history.push(`/game/${props.match.params.id}/play`)
  }

  return (
    <div>
      {console.log(players)}
      {players
        ? [players].map((player, idx) => {
            return <div key={`P-${idx}`}>{`Hey Im player, ${player}`}</div>
          })
        : null}
      <button type="button" onClick={handleReadyUp}>
        All Players Ready!
      </button>
    </div>
  )
}

export default Party
