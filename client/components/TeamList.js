import React from 'react'

const TeamList = function ({team, psychic}) {
  return (
    <div className="team-list">
      {team.map((player) => {
        if (psychic === player) {
          return <div className="player-card psychic">{player}</div>
        } else {
          return <div className="player-card">{player}</div>
        }
      })}
    </div>
  )
}
export default TeamList
