import React from 'react';
import PropTypes from 'prop-types';

const left = (<svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.292 16.494l7.147 7.056-1.869 1.893-9.067-8.951 9.069-8.927 1.866 1.896z" /></svg>);
const right = (<svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" /></svg>);

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
