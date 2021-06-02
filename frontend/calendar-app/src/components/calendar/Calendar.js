import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

const Calendar = ({ dates }) => {
  return (
    <div className="w-full flex-grow overflow-hidden flex flex-col">
      <CalendarHeader />
      <CalendarGrid />
    </div>
  );
}

export default Calendar;
