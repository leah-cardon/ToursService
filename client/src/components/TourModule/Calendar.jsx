import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CalDate from './CalDate';
import CalendarArrows from './CalendarArrows';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Recursively gets and formats next seven days.
const getDays = (date = new Date(), result = []) => {
  if (result.length === 7) { return result; }

  const month = date.getMonth() + 1;
  const currentDate = date.getDate();
  const year = date.getFullYear();

  const dateObj = {
    name: days[date.getDay()],
    month: months[date.getMonth()],
    day: currentDate,
    date: `${month}/${currentDate}/${year}`,
  };
  result.push(dateObj);
  const tomorrow = new Date(date.getTime() + (24 * 60 * 60 * 1000));

  return getDays(tomorrow, result);
};

const Calendar = ({ currentDate, setDate }) => {
  const [direction, setDirection] = useState('right');
  const dateList = getDays();

  // Passing in empty array makes this ComponentDidMount - one render only!
  useEffect(() => {
    setDate(dateList[0].date);
  }, []);

  return (
    <div id="calendarCarousel">
      <CalendarArrows direction={direction} setDirection={setDirection} arrowDir="left" />
      {dateList.map((formattedDate) => (
        <CalDate
          currentDate={currentDate}
          setDate={setDate}
          date={formattedDate}
          direction={direction}
        />
      )) }
      <CalendarArrows direction={direction} setDirection={setDirection} arrowDir="right" />
    </div>
  );
};

Calendar.propTypes = {
  currentDate: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default Calendar;
