module.exports = function () {
  const range = [0, 100]
  const bandWidth = 0.05 // percent
  const extent = range[1] - range[0]
  const midBandMax = Math.floor(range[1] - extent * (bandWidth / 2))
  const midBandMin = Math.ceil(range[0] + extent * (bandWidth / 2))
  const midBand = Math.ceil(Math.random() * midBandMax) + midBandMin

  return {
    range,
    midBand,
    bandWidth,
    extent,
    score(needleLoc) {
      const distance = Math.abs(needleLoc - midBand)
      const distanceUnit = (extent * bandWidth) / 2
      if (distance <= distanceUnit) return 4
      else if (distance <= distanceUnit * 3) return 3
      else if (distance <= distanceUnit * 5) return 2
      else return 0
    },
  }
}
