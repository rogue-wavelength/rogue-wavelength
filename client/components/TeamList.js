import React from 'react'

const TeamList = function ({team, psychic}) {
  return (
    <div className="team-list">
      {team.map((player, i) => {
        if (psychic === player) {
          return (
            <div key={i} className="player-card psychic">
              {player}
            </div>
          )
        } else {
          return (
            <div key={i} className="player-card">
              {player}
            </div>
          )
        }
      })}
    </div>
  )
}
export default TeamList
