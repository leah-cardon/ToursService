import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Disclaimer from '../Disclaimer';
import RequestForm from '../RequestForm';

import TourType from './TourType';
import Calendar from './Calendar';
import TimeDropdown from './TimeDropdown';

/*
Needed props:
financeCall (bool, initialize as false)
setCall

requests

Disclaimer only needs us to pass in name of module

have a handleSubmit here which passes info up the chain!

*/

const TourModule = ({ financeCall, setCall, requests }) => {
  const [currentDate, setDate] = useState('');
  const [digital, setDigital] = useState(false);

  return (
    <div>
      <TourType digital={digital} setDigital={setDigital} />
      <Calendar setDate={setDate} />
      <TimeDropdown occupied={requests} currentDate={currentDate} />
      <RequestForm tour financeCall={financeCall} setCall={setCall} />
      <Disclaimer name="Schedule A Tour" />
    </div>
  );
};

TourModule.propTypes = {
  financeCall: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
  requests: PropTypes.shape([]).isRequired,
};

export default TourModule;
