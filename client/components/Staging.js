import React, {useState} from 'react'
import socket from '../socket'

const Staging = (props) => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [join, setJoin] = useState(true)
  const [host, setHost] = useState(true)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    socket.emit('room', room)
    props.history.push(`/game/${room}?name=${name}`)
  }

  const handleJoin = (evt) => {
    evt.preventDefault()
    setJoin(!join)
  }

  const handleHost = (evt) => {
    evt.preventDefault()
    setHost(!host)
  }

  return (
    <div
      style={{display: 'flex', justifyContent: 'center', flexFlow: 'column'}}
    >
      <button
        hidden={!join}
        type="button"
        style={{fontSize: '2em'}}
        onClick={handleHost}
      >
        {`${host === false ? 'MAIN MENU' : 'HOST'}`}
      </button>
      <div hidden={host}>
        Host a session for your friends to join!
        <label>
          Username:
          <input
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </label>
        <button
          type="submit"
          style={{fontSize: '2em'}}
          onClick={handleSubmit}
          disabled={name.length < 1}
        >
          SUBMIT
        </button>
      </div>
      <button
        hidden={!host}
        type="button"
        style={{fontSize: '2em'}}
        onClick={handleJoin}
      >
        {`${join === false ? 'MAIN MENU' : 'JOIN'}`}
      </button>
      <div hidden={join}>
        Join a friend's session!
        <label>
          Username:
          <input
            type="text"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
          />
        </label>
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
