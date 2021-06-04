import React from 'react';
import { useSelector } from 'react-redux'
import CalendarGridGap from './CalendarGridGap'

function MonthlyCalendarGrid() {
  const items = []

  const styleDayAvailable={
    background:"#ffffff",
    borderStyle:"groove"
  }
  const styleDayUnavailable={
    background:"#777777",
    color:"#ffffff"
  }
  const days = useSelector((state) => state.days)
  
  days.forEach((element, index) => items.push(
    <div key={index} style={element.active ? styleDayAvailable : styleDayUnavailable}>
      <div className="day-number">{element.day}</div>
      {element.childItemsEvents.map((data,index) => <CalendarGridGap key={index} {...data} /> )}
    </div>
  ))
  
  return (
    <div id='body-grid'>
      <div id="content-days">
        {items}
      </div>
    </div>
  )
}

export default MonthlyCalendarGrid;
