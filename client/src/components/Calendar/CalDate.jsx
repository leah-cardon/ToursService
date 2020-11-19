import React from 'react';
import PropTypes from 'prop-types';

import s from '../../styles/Calendar.css';

const CalDate = ({ currentDate, date, setDate, direction }) => {
  const style = direction === 'right' ? s.date : `${s.date} ${s.transform}`;
  const buttonStyle = date.date === currentDate ? `${s.button} ${s.sel}` : s.button;

  return (
    <div className={style}>
      <button className={buttonStyle} type="button" onClick={() => setDate(date.date)}>
        <p className={s.name}>{date.name}</p>
        <p className={s.day}>{date.day}</p>
        <p className={s.month}>{date.month}</p>
      </button>

    </div>
  );
};

CalDate.propTypes = {
  currentDate: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
};

export default CalDate;
