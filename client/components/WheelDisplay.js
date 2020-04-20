import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
  VictoryPie,
  VictoryLabel,
  VictoryChart,
  VictoryBar,
  VictoryAxis,
} from 'victory'

const WheelDisplay = function (props) {
  // const position = useSelector((state) => state.target)
  const position = 100 - 75

  function scale(x, type) {
    const distance = Math.abs(position - x)
    if (distance === 0) return type === 'color' ? 'red' : 4
    else if (distance <= 5) return type === 'color' ? 'gold' : 3
    else if (distance <= 10) return type === 'color' ? 'orange' : 2
    else return type === 'color' ? 'beige' : undefined
  }
  // THIS LOGIC NEEDS TO BE FINE TUNED. MATHS AND LOGIC INVOLVED

  // let dataList = [
  //   {x: 'Too Low', y: position - 12.5},
  //   {x: '1', y: 5},
  //   {x: '2', y: 5},
  //   {x: '4', y: 5},
  //   {x: '2', y: 5},
  //   {x: '1', y: 5},
  //   {x: 'Too High', y: 100 - position - 12.5},
  // ]

  // if (position <= 12.5) {
  //   dataList[1].y = position - 7.5
  // }
  // if (position <= 7.5) {
  //   dataList[2].y = position - 2.5
  // }
  // if (position <= 2.5) {
  //   dataList[3].y = position - 2.5
  // }
  // if (position > 87.5 && position <= 92.5) {
  //   dataList[5].y = 92.5 - position
  // }
  // if (position > 92.5 && position <= 97.5) {
  //   dataList[4].y = 97.5 - position
  // }
  // if (position > 97.5) {
  //   dataList[3].y = 102.5 - position
  // }

  // let colorScale = ['beige', 'orange', 'gold', 'red', 'gold', 'orange', 'beige']
  // let ArrayStartingPosition = 0
  // let total = 0
  // dataList = dataList.reduce((acc, cur) => {
  //   if (total >= 100) {
  //     return acc
  //   }
  //   total += cur.y
  //   if (cur.y <= 0 && position < 12.5) {
  //     ArrayStartingPosition++
  //     return acc
  //   } else if (cur.y <= 0 && position >= 87.5) {
  //     return acc
  //   } else {
  //     acc.push(cur)
  //     return acc
  //   }
  // }, [])
  // console.log(dataList)

  return (
    // {/* <VictoryPie
    //   startAngle={-90}
    //   endAngle={90}
    //   colorScale={colorScale.slice(ArrayStartingPosition)}
    //   data={dataList}
    //   labelPosition="centroid"
    //   labelRadius={90}
    //   labelComponent={<VictoryLabel transform={({datum: {startAngle, endAngle}, x, y, dx, dy}) => `rotate(${(startAngle + endAngle) / 2}, ${x + 2}, ${y - 2.5})`} />}
    //   radius={100}
    //   height={300}
    //   animate={{duration: 2000}}
    // /> */}
    <div className="wheel-display">
      <VictoryChart polar startAngle={0} endAngle={180} domain={{x: [0, 100]}}>
        <VictoryAxis tickFormat={() => ''} />
        <VictoryBar
          data={Array.from({length: 7}, (_, i) => ({
            x: position - 15 + i * 5,
            y: 1,
          }))}
          style={{
            data: {
              fill: ({datum: {x}}) => scale(x, 'color'),
            },
          }}
          labels={({datum: {x}}) => scale(x, 'points')}
          labelComponent={
            <VictoryLabel
              transform={({x, y}) => {
                return `rotate(0,${x},${y})`
              }}
            />
          }
        />
      </VictoryChart>
    </div>
  )
}
export default WheelDisplay
