import React from 'react';
import PropTypes from 'prop-types';

import FinancingCheck from './FinancingCheck';
import Disclaimer from './Disclaimer';
import RequestForm from './RequestForm';
/*
Needed in state:
financeCall (bool, initialize as false)

Disclaimer only needs us to pass in name of module

*/

const RequestModule = ({ financeCall, setCall }) => (
  <div>
    <RequestForm />
    <FinancingCheck financeCall={financeCall} setCall={setCall} />
    <Disclaimer name="Request Info" />
    {/* <AgentsList /> */}
  </div>
);

RequestModule.propTypes = {
  financeCall: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
};

export default RequestModule;
