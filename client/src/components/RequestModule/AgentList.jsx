import React from 'react';
import PropTypes from 'prop-types';

import Agent from './Agent';

const AgentList = ({ agents, setAgent }) => (
  <div>
    {agents.map((agent) => (<Agent key={agent.name} agent={agent} setAgent={setAgent} />))}
  </div>
);

AgentList.propTypes = {
  agents: PropTypes.shape([]).isRequired,
  setAgent: PropTypes.func.isRequired,
};

export default AgentList;
