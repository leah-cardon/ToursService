import React from 'react';
import PropTypes from 'prop-types';

import Agent from './Agent';

const AgentList = ({ agents }) => (
  <div>
    {agents.map((agent) => (<Agent agent={agent} key={agent.name} />))}
  </div>
);

AgentList.propTypes = { agents: PropTypes.shape([]).isRequired };

export default AgentList;
