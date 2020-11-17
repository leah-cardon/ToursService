import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getDays } from '../../utils/Logic';

import CalDate from './CalDate';
import CalendarArrows from './CalendarArrows';

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
