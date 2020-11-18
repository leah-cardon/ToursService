/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';
import { star, badStar } from '../../utils/SVG';

// Edit to add name, title, number, stars, reviews, sales, photo
const Agent = ({ agent, setAgent, curAgent }) => {
  const toolTipId = `${agent.name}Tooltip`;
  const selAgent = agent.name === curAgent ? 'selAgent agentPhoto' : 'agentPhoto';
  const stars = [1, 2, 3, 4, 5].map((num) => (agent.stars >= num ? star : badStar));

  return (
    <div
      className="agent"
      onClick={() => setAgent(agent.name)}
      onKeyDown={() => setAgent(agent.name)}
      role="button"
      tabIndex={0}
      data-tip
      data-for={toolTipId}
    >
      <img className={selAgent} src={agent.photo} alt="AgentIMG" />
      <p className="agentTitle">{`${agent.title}\nAgent`}</p>
      <ReactTooltip id={toolTipId} className="agentToolTip opaque" place="top" effect="solid" type="light" clickable delayHide={100}>
        <div className="agentContainer">
          <img className="tooltipPhoto" src={agent.photo} alt="AgentIMG" />
          <div className="agentInfo">
            <p className="tooltipInfo tooltipName">{agent.name}</p>
            <p className="tooltipInfo">{`${agent.title} Agent`}</p>
            <p className="tooltipInfo">{agent.number}</p>
          </div>
          <div className="agentRatings">
            <p className="tooltipInfo rating">{stars}  ({agent.reviews})</p>
            <p className="tooltipInfo rating">{agent.sales} Recent Sales</p>
          </div>
        </div>
      </ReactTooltip>
    </div>
  );
};

Agent.propTypes = {
  agent: PropTypes.object.isRequired,
  setAgent: PropTypes.func.isRequired,
  curAgent: PropTypes.string.isRequired,
};

export default Agent;
