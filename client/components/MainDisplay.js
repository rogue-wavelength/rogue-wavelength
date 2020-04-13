import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {me} from '../store'
import {StatusBar, WheelDisplay, CardDisplay} from './'

// dummy stuff for now

const MainDisplay = function () {
  return (
    <div className="main-display">
      <StatusBar />
      <WheelDisplay />
      <CardDisplay />
    </div>
  )
}
export default MainDisplay
