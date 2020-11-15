/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/*
TODO
Styling
*/

// Check for occupied slots. Return all EXCEPT those slots.
const getFreeSlots = (occupied = [], currentDate = '') => {
  const occupiedSlots = {};
  const result = [];

  occupied.forEach((person) => {
    person.date === currentDate ? occupiedSlots[person.time] = true : null;
  });

  for (let i = 9; i < 20; i += 1) {
    const ampm = i > 11 ? 'PM' : 'AM';
    const hour = i % 12 === 0 ? 12 : i % 12;

    const time = `${hour}:00 ${ampm}`;
    const time2 = `${hour}:30 ${ampm}`;

    !occupiedSlots[time] ? result.push(time) : null;
    !occupiedSlots[time2] ? result.push(time2) : null;
  }
  result[result.length - 1] === '7:30 PM' ? result.pop() : null;
  return result;
};

const TimeDropdown = ({ occupied, currentDate }) => {
  const [available, setAvailable] = useState([]);

  useEffect(() => {
    setAvailable(getFreeSlots(occupied, currentDate));
  }, [currentDate]);

  return (
    <select>
      <option value="">Choose a Time</option>
      {available.map((slot) => (<option value={slot}>{slot}</option>))}
    </select>
  );
};

TimeDropdown.propTypes = {
  occupied: PropTypes.shape([]).isRequired,
  currentDate: PropTypes.string.isRequired,
};

export default TimeDropdown;
