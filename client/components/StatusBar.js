import React from 'react'

const psychic = 'ian'
const user = 'ian'
const teamPlaying = ['ian', 'jasmine']

const StatusBar = function (props) {
  // const psychic = useSelector(state=>state.psychic)
  // const user = useSelector(state=> state.user)
  //   const teamPlaying = useSelector(state=> state.teamPlaying)

  let message

  if (psychic === user) {
    message = 'You are the Psychic!'
  } else if (teamPlaying.includes(user)) {
    message = 'Your team is guessing!'
  } else {
    message = 'The other team is playing'
  }

  return <div className="status">{message}</div>
}
export default StatusBar
