import React from 'react';
import PropTypes from 'prop-types';

const TourRequest = ({ tour, toggleTour }) => {
  const inPerson = tour ? 'selTour toggleInfo' : 'noTour toggleInfo';
  const reqInfo = !tour ? 'selTour toggleInfo' : 'noTour toggleInfo';

  return (
    <div id="tourInfoContainer">
      <div className="tourGrid">
        <button className={inPerson} onClick={() => toggleTour(true)} type="button">
          Schedule A Tour
        </button>

      </div>
      <div className="tourGrid">
        <button className={reqInfo} onClick={() => toggleTour(false)} type="button">
          Request Info
        </button>

      </div>
    </div>
  );
};

TourRequest.propTypes = {
  tour: PropTypes.bool.isRequired,
  toggleTour: PropTypes.func.isRequired,
};

export default TourRequest;
