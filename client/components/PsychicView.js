import React, {useState} from 'react'
import socket from '../socket'

const PsychicView = (props) => {
  const [num, setNum] = useState(0)
  const [card, setCard] = useState(0)
  const [input, setInput] = useState('')

  const handleRandom = (evt) => {
    setNum(Math.ceil(Math.random() * 100))
  }

  const handleCard = (evt) => {
    setCard(Math.ceil(Math.random() * 100))
    // call getCard thunk from database
  }

  const handleChange = (evt) => {
    setInput(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    socket.emit('flip', {input, card, num})
  }

  return (
    <div className="psychic">
      <p>psychic view {num}</p>
      <button onClick={handleRandom}>random number</button>
      <p>ur card number: {card}</p>
      <button onClick={handleCard}>random card</button>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        ready!
      </button>
    </div>
  )
}

export default PsychicView
