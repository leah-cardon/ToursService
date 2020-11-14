import React, { useState } from 'react';
import PropTypes from 'prop-types';

/*
TODO:
style button select
style the hover
add an actual circle question mark

*/
const text = 'If you\'d like to tour this home without leaving yours, select the video chat tour type and discuss available options with the agent you are connected with.';

const hoverDisplay = (<p>{text}</p>);

const TourType = ({ digital, setDigital }) => {
  const [hover, toggleHover] = useState(false);

  const inPerson = !digital ? 'notSelected' : 'selected';
  const virtual = digital ? 'notSelected' : 'selected';

  return (
    <div>
      <div>
        <p>Tour Type</p>
        <p onMouseEnter={toggleHover} onMouseLeave={toggleHover}>?</p>
        {hover ? (hoverDisplay) : null}
      </div>

      <div>
        <button className={inPerson} type="button" onClick={() => setDigital(false)}>In-Person</button>
        <button className={virtual} type="button" onClick={() => setDigital(true)}>Video Chat</button>
      </div>
    </div>
  );
};

TourType.propTypes = {
  digital: PropTypes.bool.isRequired,
  setDigital: PropTypes.func.isRequired,
};

export default TourType;
