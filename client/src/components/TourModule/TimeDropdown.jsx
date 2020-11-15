import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFreeSlots } from '../../utils/Logic';

/*
TODO
Styling
*/

const TimeDropdown = ({ occupied, currentDate, setTime }) => {
  const [available, setAvailable] = useState([]);

  useEffect(() => {
    setAvailable(getFreeSlots(occupied, currentDate));
  }, [currentDate, occupied]);

  return (
    <select onChange={(e) => setTime(e.target.value)}>
      <option value="">Choose a Time</option>
      {available.map((slot) => (<option value={slot}>{slot}</option>))}
    </select>
  );
};

TimeDropdown.propTypes = {
  occupied: PropTypes.shape([]).isRequired,
  currentDate: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
};

export default TimeDropdown;
