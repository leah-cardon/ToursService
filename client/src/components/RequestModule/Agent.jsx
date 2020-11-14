/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

// Edit to add name, title, number, stars, reviews, sales, photo
const Agent = ({ agent }) => (
  <div>
    {agent.name}
  </div>
);

Agent.propTypes = { agent: PropTypes.object.isRequired };

export default Agent;
