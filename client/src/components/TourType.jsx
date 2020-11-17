import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import { qMark } from '../utils/SVG';

const text = 'If you\'d like to tour this home without leaving yours, select the video chat tour type and discuss available options with the agent you are connected with.';

const hoverDisplay = (<p style={{ whiteSpace: 'pre-wrap' }}>{text}</p>);

const TourType = ({ digital, setDigital }) => {
  const inPerson = !digital ? 'selected tourButton tour' : 'notSelected tourButton tour';
  const virtual = digital ? 'selected tourButton digital' : 'notSelected tourButton digital';

  return (
    <div>
      <div className="tourTypeContainer">
        <p>Tour Type</p>
        <p data-tip data-for="toolTip" data-place="bottom">{qMark}</p>
        <ReactTooltip id="toolTip" place="bottom" effect="solid" type="light">{hoverDisplay}</ReactTooltip>
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
