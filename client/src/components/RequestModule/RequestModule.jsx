import React from 'react';
import PropTypes from 'prop-types';

import FinancingCheck from '../FinancingCheck';
import Disclaimer from '../Disclaimer';
import RequestForm from '../RequestForm';
import AgentList from './AgentList';
/*
Needed in state:
financeCall (bool, initialize as false)

Disclaimer only needs us to pass in name of module

*/

const RequestModule = ({ call, setCall, agents }) => (
  <div>
    <RequestForm />
    <FinancingCheck call={call} setCall={setCall} />
    <Disclaimer name="Request Info" />
    <AgentList agents={agents} />
  </div>
);

RequestModule.propTypes = {
  call: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
  agents: PropTypes.shape([]).isRequired,
};

export default RequestModule;
