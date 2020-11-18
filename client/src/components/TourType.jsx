import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import { qMark } from '../utils/SVG';

const text = 'If you\'d like to tour this home without leaving\nyours, select the video chat tour type and discuss\navailable options with the agent you are\nconnected with.';

const hoverDisplay = (<p>{text}</p>);

const TourType = ({ digital, setDigital }) => {
  const inPerson = !digital ? 'typeSelect tourButton tour' : 'notType tourButton tour';
  const virtual = digital ? 'typeSelect tourButton digital' : 'notType tourButton digital';

  return (
    <div>
      <div className="tourTypeContainer">
        <p style={{ margin: 0 }}>Tour Type</p>
        <p style={{ margin: 0 }} data-tip data-for="tourToolTip" data-place="bottom">{qMark}</p>
        <ReactTooltip id="tourToolTip" className="opaque" place="bottom" effect="solid" type="light">{hoverDisplay}</ReactTooltip>
      </div>

      <div id="tourButtonContainer">
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
