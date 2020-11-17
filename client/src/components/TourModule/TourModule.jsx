import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Disclaimer from '../Disclaimer';
import RequestForm from '../RequestForm';
import TourType from './TourType';
import Calendar from './Calendar';
import TimeDropdown from './TimeDropdown';

const TourModule = ({
  submit, call, setCall, requests,
}) => {
  const [currentDate, setDate] = useState('');
  const [digital, setDigital] = useState(false);
  const [time, setTime] = useState('');

  const handleSubmit = (form) => {
    const toSend = {
      date: currentDate, time, type: digital, ...form,
    };
    delete toSend.message;
    submit(toSend);
  };

  return (
    <div id="tourContainer">
      <TourType digital={digital} setDigital={setDigital} />
      <Calendar currentDate={currentDate} setDate={setDate} />
      <TimeDropdown occupied={requests} currentDate={currentDate} setTime={setTime} />
      <RequestForm tour call={call} setCall={setCall} submit={handleSubmit} />
      <Disclaimer name="Schedule A Tour" />
    </div>
  );
};

TourModule.propTypes = {
  submit: PropTypes.func.isRequired,
  call: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
  requests: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TourModule;
