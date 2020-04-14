import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import socket from '../socket'

import {setUser} from '../store'

//Host or Join a game Component
const Staging = (props) => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [join, setJoin] = useState(true)
  const [host, setHost] = useState(true)

  const handleHost = (evt) => {
    evt.preventDefault()
    let genRoom = ''
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 4; i++) {
      genRoom += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }
    socket.emit('room', genRoom, name)
    props.history.push(`/game/${genRoom}/group`)
  }

  const handleJoin = (evt) => {
    evt.preventDefault()
    socket.emit('room', room, name)
    props.history.push(`/game/${room}/group`)
  }

  const showJoin = (evt) => {
    evt.preventDefault()
    setJoin(!join)
  }

  const showHost = (evt) => {
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
        onClick={showHost}
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
          onClick={handleHost}
          disabled={name.length < 1}
        >
          SUBMIT
        </button>
      </div>
      <button
        hidden={!host}
        type="button"
        style={{fontSize: '2em'}}
        onClick={showJoin}
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
          onClick={handleJoin}
          disabled={name.length < 1 || room.length !== 4}
        >
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Staging
