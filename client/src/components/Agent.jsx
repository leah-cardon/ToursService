import React from 'react';
import PropTypes from 'prop-types';

// Edit to format name, title, number, stars, reviews, recentSales
const Agent = ({ agent }) => (
  <div>
    {agent}
  </div>
);

Agent.propTypes = { agent: PropTypes.shape({}).isRequired };

export default Agent;
