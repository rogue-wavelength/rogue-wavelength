import React from 'react'
import StyleTeamList from './TeamList.style.js'

const TeamList = function ({team, psychic}) {
  return (
    <StyleTeamList psychic={psychic}>
      {team.map((player, i) => {
        return (
          <div key={i} className="player-card">
            {player}
          </div>
        )
      })}
    </StyleTeamList>
  )
}
export default TeamList
