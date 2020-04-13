import React, {useState} from 'react'
import socket from '../socket'

const Staging = (props) => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [join, setJoin] = useState(true)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    socket.emit('room', room)
    props.history.push(`/game/${room}?name=${name}`)
  }

  const handleJoin = (evt) => {
    evt.preventDefault()
    setJoin(!join)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <label>
        Username:
        <input
          type="text"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </label>
      <button type="button" style={{fontSize: '2em'}}>
        HOST
      </button>
      <button type="button" style={{fontSize: '2em'}} onClick={handleJoin}>
        JOIN
      </button>
      <div hidden={join}>
        <label>
          Enter Room Code:
          <input
            type="text"
            value={room}
            onChange={(evt) => setRoom(evt.target.value)}
          />
        </label>
        <button
          type="submit"
          style={{fontSize: '2em'}}
          onClick={handleSubmit}
          disabled={name.length < 1 || room.length !== 4}
        >
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Staging
