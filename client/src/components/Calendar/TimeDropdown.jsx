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
    <div id="timeContainer">
      <select id="timeSelect" form="userForm" onChange={(e) => setTime(e.target.value)} required>
        <option value="">Choose a Time</option>
        {available.map((slot) => (<option value={slot}>{slot}</option>))}
      </select>
      <p id="selectArrow">&gt;</p>

    </div>
  );
};

TimeDropdown.propTypes = {
  occupied: PropTypes.shape([]).isRequired,
  currentDate: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
};

export default TimeDropdown;
