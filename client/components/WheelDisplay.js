import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {VictoryPie} from 'victory'

const WheelDisplay = function (props) {
  // const position = useSelector((state) => state.target)
  const position = 95

  // THIS LOGIC NEEDS TO BE FINE TUNED. MATHS AND LOGIC INVOLVED

  let dataList = [
    {x: 'Too Low', y: position - 12.5},
    {x: '1', y: 5},
    {x: '2', y: 5},
    {x: '4', y: 5},
    {x: '2', y: 5},
    {x: '1', y: 5},
    {x: 'Too High', y: 100 - position - 12.5},
  ]

  if (position <= 12.5) {
    dataList[1].y = position - 7.5
  }
  if (position <= 7.5) {
    dataList[2].y = position - 2.5
  }
  if (position <= 2.5) {
    dataList[3].y = position - 2.5
  }
  if (position > 87.5 && position <= 92.5) {
    dataList[5].y = 92.5 - position
  }
  if (position > 92.5 && position <= 97.5) {
    dataList[4].y = 97.5 - position
  }
  if (position > 97.5) {
    dataList[3].y = 102.5 - position
  }

  let colorScale = ['beige', 'orange', 'gold', 'red', 'gold', 'orange', 'beige']
  let ArrayStartingPosition = 0
  let total = 0
  dataList = dataList.reduce((acc, cur) => {
    if (total >= 100) {
      return acc
    }
    total += cur.y
    if (cur.y <= 0 && position < 12.5) {
      ArrayStartingPosition++
      return acc
    } else if (cur.y <= 0 && position >= 87.5) {
      return acc
    } else {
      acc.push(cur)
      return acc
    }
  }, [])
  console.log(dataList)

  return (
    <div className="wheel-display">
      <VictoryPie
        startAngle={-90}
        endAngle={90}
        colorScale={colorScale.slice(ArrayStartingPosition)}
        data={dataList}
        labelPosition="centroid"
        labelRadius={120}
        radius={100}
        height={300}
        animate={{duration: 2000}}
      />
    </div>
  )
}
export default WheelDisplay
