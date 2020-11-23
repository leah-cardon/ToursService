import React from 'react';
import PropTypes from 'prop-types';

import { left, right } from '../../utils/SVG';
import s from '../../styles/Calendar.css';

const CalendarArrows = ({ direction, setDirection, arrowDir }) => {
  const toRender = arrowDir === 'right' ? right : left;
  const changeTo = arrowDir === 'right' ? 'left' : 'right';

  // Adds appropriate styles based on which arrow is rendering.
  let style = arrowDir === 'right' ? s.right : s.left;
  style += arrowDir !== direction ? ` ${s.hide}` : ` ${s.show}`;

  return (
    <div className={style}>
      <button className={s.arrow} type="button" onClick={() => setDirection(changeTo)}>
        {toRender}
      </button>
    </div>
  );
};

CalendarArrows.propTypes = {
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
  arrowDir: PropTypes.string.isRequired,
};

export default CalendarArrows;
