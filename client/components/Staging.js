import React, {useState} from 'react'
import socket from '../socket'
import {Route, Redirect} from 'react-router-dom'

const Staging = (props) => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // alert(`Entering room ${room}`)
    socket.emit('room', room)
    props.history.push(`/game/${room}?name=${name}`)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </label>
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
