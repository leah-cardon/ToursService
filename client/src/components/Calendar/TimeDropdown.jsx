import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFreeSlots } from '../../utils/Logic';
import { checkArrow } from '../../utils/SVG';
import s from '../../styles/TimeDropdown.css';

const TimeDropdown = ({ occupied, currentDate, setTime }) => {
  const [available, setAvailable] = useState([]);

  useEffect(() => {
    setAvailable(getFreeSlots(occupied, currentDate));
  }, [currentDate, occupied]);

  return (
    <div id={s.container}>
      <select id={s.select} form="tourReqForm" onChange={(e) => setTime(e.target.value)} required>
        <option value="">Choose a Time</option>
        {available.map((slot) => (<option value={slot}>{slot}</option>))}
      </select>
      <p id={s.arrow}>{checkArrow}</p>

    </div>
  );
};

TimeDropdown.propTypes = {
  occupied: PropTypes.array.isRequired,
  currentDate: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
};

export default TimeDropdown;
