import React, {useState} from 'react'
import socket from '../socket'
import {Route, Redirect} from 'react-router-dom'

const Staging = (props) => {
  const [room, setRoom] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // alert(`Entering room ${room}`)
    props.history.push(`/game/${room}`)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <form onSubmit={handleSubmit}>
        <label>
          Room Code:
          <input
            type="text"
            value={room}
            onChange={(evt) => setRoom(evt.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Staging
