/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

/*
We'll want a tooltip with:
photo on very left
name
title "agent"
number

on very right
stars (reviews)
`${sales} Recent Sales`

clickable div with photo and title

*/

// Edit to add name, title, number, stars, reviews, sales, photo
const Agent = ({ agent, setAgent }) => (
  <div
    onClick={() => setAgent(agent.name)}
    onKeyDown={() => setAgent(agent.name)}
    role="button"
    tabIndex={0}
  >
    <img src={agent.photo} alt="IMG" />
    <p>{agent.name}</p>
  </div>
);

Agent.propTypes = {
  agent: PropTypes.object.isRequired,
  setAgent: PropTypes.func.isRequired,
};

export default Agent;
