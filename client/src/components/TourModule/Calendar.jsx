import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import CalDate from './CalDate';
/*
Format:
"date" : "11/17/2020", "time" : "7:00 AM"
TODO: styling

*/

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getDays = (date = new Date(), result = []) => {
  // const date = new Date();
  if (result.length === 7) {
    return result;
  }

  const month = date.getMonth() + 1;
  const currentDate = date.getDate();
  const year = date.getYear();

  const dateObj = {
    name: days[date.getDay()],
    month: months[date.getMonth()],
    day: currentDate,
    date: `${month}/${currentDate}/${year}`,
  };

  result.push(dateObj);
  const tomorrow = new Date(date.getTime() + (24 * 60 * 60 * 1000));

  // eslint-disable-next-line no-unused-vars
  return getDays(tomorrow, result);
};

const Calendar = ({ setDate }) => {
  const dateList = getDays();
  useEffect(() => {
    setDate(dateList[0].date);
  });

  return (
    <div>
      {dateList.map((date) => (<CalDate date={date} setDate={setDate} />)) }
    </div>
  );
};

Calendar.propTypes = { setDate: PropTypes.func.isRequired };

export default Calendar;
