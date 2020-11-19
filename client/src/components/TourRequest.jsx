import React from 'react';
import PropTypes from 'prop-types';

import s from '../styles/TourRequest.css';

const TourRequest = ({ tour, toggleTour }) => {
  const inPerson = tour ? s.selTour : s.noTour;
  const reqInfo = !tour ? s.selReq : s.noReq;

  return (
    <div id={s.container}>
      <div className={s.grid}>
        <button className={`${s.toggle} ${inPerson}`} onClick={() => toggleTour(true)} type="button">
          Schedule A Tour
        </button>

      </div>
      <div className={s.grid}>
        <button className={`${s.toggle} ${reqInfo}`} onClick={() => toggleTour(false)} type="button">
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
