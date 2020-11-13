import React from 'react';
import PropTypes from 'prop-types';

import Disclaimer from './Disclaimer';
import RequestForm from './RequestForm';
/*
Needed in state:
financeCall (bool, initialize as false)

Disclaimer only needs us to pass in name of module

*/

const TourModule = ({ financeCall, setCall }) => (
  <div>
    <RequestForm displayFinance financeCall={financeCall} setCall={setCall} />
    <Disclaimer name="Schedule A Tour" />
  </div>
);

TourModule.propTypes = {
  financeCall: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
};

export default TourModule;
