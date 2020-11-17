/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const CalDate = ({
  currentDate, date, setDate, direction,
}) => {
  // a little confusing, but if arrow points right, we want to display left items.
  const style = direction === 'right' ? 'calGridItem' : 'calGridItem calGridRight';
  const buttonStyle = date.date === currentDate ? 'calButton calSelected' : 'calButton';

  return (
    <div className={style}>
      <button className={buttonStyle} type="button" onClick={() => setDate(date.date)}>
        <p className="calName">{date.name}</p>
        <p className="calDay">{date.day}</p>
        <p className="calMonth">{date.month}</p>
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
