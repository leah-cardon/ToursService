import React, { useState } from 'react';
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

const RequestModule = ({
  submit, call, setCall, agents,
}) => {
  const [agent, setAgent] = useState('');

  const handleSubmit = (form) => {
    const toSend = { agent, ...form };
    submit(toSend);
  };

  return (
    <div>
      <RequestForm call={call} setCall={setCall} submit={handleSubmit} />
      <FinancingCheck call={call} setCall={setCall} />
      <Disclaimer name="Request Info" />
      <AgentList agents={agents} setAgent={setAgent} />
    </div>
  );
};

RequestModule.propTypes = {
  submit: PropTypes.func.isRequired,
  call: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
  agents: PropTypes.shape([]).isRequired,
};

export default RequestModule;
