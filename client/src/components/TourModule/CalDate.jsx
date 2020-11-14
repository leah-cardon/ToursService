/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CalDate = ({ date, setDate }) => (
  <button type="button" onClick={() => setDate(date.date)}>
    <p>{date.name}</p>
    <p>{date.day}</p>
    <p>{date.month}</p>
  </button>
);

CalDate.propTypes = {
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default CalDate;
