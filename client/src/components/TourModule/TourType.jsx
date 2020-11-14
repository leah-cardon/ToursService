import React from 'react';
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';

const text = 'If you\'d like to tour this home without leaving yours, select the video chat tour type and discuss available options with the agent you are connected with.';

const hoverDisplay = (<p style={{ whiteSpace: 'pre-wrap' }}>{text}</p>);
const qMark = (<svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.96 27.93c-6.61 0-11.97-5.36-11.97-11.97S9.35 3.99 15.96 3.99s11.97 5.36 11.97 11.97-5.36 11.97-11.97 11.97zm0-2.66a9.31 9.31 0 1 0 0-18.62 9.31 9.31 0 0 0 0 18.62zm-1.33-4.51h2.66v2.66h-2.66v-2.66zm2.66-2.16h-2.66v-3.97h1.33a1.664 1.664 0 0 0 0-3.325c-.465 0-.897.19-1.21.523l-.912.968-1.936-1.824.912-.968a4.324 4.324 0 1 1 4.476 7.077V18.6z" fill="#869099" /></svg>);

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
