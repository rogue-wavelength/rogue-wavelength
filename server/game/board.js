const newBoard = function (
  range = [(rangeMin = 0), (rangeMax = 100)],
  bandWidth = 0.05
) {
  const extent = rangeMax - rangeMin
  const midBandMax = Math.floor(rangeMax - extent * (bandWidth / 2))
  const midBandMin = Math.ceil(rangeMin + extent * (bandWidth / 2))
  const midBand = Math.ceil(Math.random() * midBandMax) + midBandMin
  const scoreUnit = (bandWidth * extent) / 2 // (dist btwn needle and midBand) 0-1 score units = 4 pts, 2-3 su = 3 pts, 4-5 su = 2 pts

  return {midBand, scoreUnit}
}

const scoreGuess = function (board, needleLoc) {
  const {midBand, scoreUnit} = board
  const distance = Math.abs(needleLoc - midBand) / scoreUnit // # of score units away from middle
  if (distance <= 1) return 4
  else if (distance <= 3) return 3
  else if (distance <= 5) return 2
  else return 0
}

module.exports = {
  newBoard,
  scoreGuess,
}
