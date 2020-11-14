/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/*
TODO
// I think our API req should get list of dates and times and NOTHING ELSE.

"date" : "8/16/2021", "time" : "6:30 AM"
*/

// Check for occupied slots. Return all EXCEPT those slots.
const getOccupiedSlots = (occupied = [], currentDate = '') => {
  const occupiedSlots = occupied.filter((person) => currentDate === person.date);
  const result = [];

  for (let i = 9; i < 20; i += 1) {
    const ampm = i > 11 ? 'PM' : 'AM';
    const hour = i % 12;

    const time = `${hour}:00 ${ampm}`;
    const time2 = `${hour}:30 ${ampm}`;

    let first = false;
    let second = false;
    for (let j = 0; j < occupiedSlots.length; j += 1) {
      const person = occupiedSlots[j];
      if (person.time === time) {
        first = true;
        break;
      }
    }
    for (let j = 0; j < occupiedSlots.length; j += 1) {
      const person = occupiedSlots[j];
      if (person.time === time2) {
        second = true;
        break;
      }
    }

    !first ? result.push(time) : null;
    !second ? result.push(time2) : null;
  }
  return result;
};

const TimeDropdown = ({ occupied, currentDate }) => {
  const [available, setAvailable] = useState([]);
  useEffect(() => {
    const a = getOccupiedSlots(occupied, currentDate);
    setAvailable(a);
  });

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
