import React from 'react';
import PropTypes from 'prop-types';

import Agent from './Agent';

const AgentList = ({ agents, setAgent, curAgent }) => (
  <div id="agentList">
    {agents.map((agent) => (
      <Agent key={agent.name} curAgent={curAgent} agent={agent} setAgent={setAgent} />
    ))}
  </div>
);

AgentList.propTypes = {
  agents: PropTypes.shape([]).isRequired,
  setAgent: PropTypes.func.isRequired,
  curAgent: PropTypes.string.isRequired,
};

export default AgentList;
