import React from 'react';
import PropTypes from 'prop-types';

import { left, right } from '../../utils/SVG';

const CalendarArrows = ({ direction, setDirection, arrowDir }) => {
  const toRender = arrowDir === 'right' ? right : left;
  const changeTo = arrowDir === 'right' ? 'left' : 'right';

  // Adds appropriate styles based on which arrow is rendering.
  let style = arrowDir === 'right' ? 'calRight' : 'calLeft';
  arrowDir !== direction ? style += ' hideArrow' : style += ' showArrow';

  return (
    <div className={style}>
      <button className="calArrow" type="button" onClick={() => setDirection(changeTo)}>
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
