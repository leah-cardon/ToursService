import React from 'react';
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';
import { star, badStar } from '../../utils/SVG';
import s from '../../styles/Agents.css';

const Agent = ({ agent, setAgent, curAgent }) => {
  const toolTipId = `${agent.name}Tooltip`;
  const selAgent = agent.name === curAgent ? `${s.sel} ${s.photo}` : s.photo;
  const stars = [1, 2, 3, 4, 5].map((num) => (agent.stars >= num ? star : badStar));

  return (
    <div
      className={s.agent}
      onClick={() => setAgent(agent.name)}
      onKeyDown={() => setAgent(agent.name)}
      role="button"
      tabIndex={0}
      data-tip
      data-for={toolTipId}
    >
      <img className={selAgent} src={agent.photo} alt="AgentIMG" />
      <p className={s.title}>{`${agent.title}\nAgent`}</p>

      <ReactTooltip id={toolTipId} className="opaque" place="top" effect="solid" type="light" clickable delayHide={100}>
        <div className={s.container}>
          <img className={s.tPhoto} src={agent.photo} alt="AgentIMG" />
          <div className={s.agentInfo}>
            <p className={`${s.info} ${s.name}`}>{agent.name}</p>
            <p className={s.info}>{`${agent.title} Agent`}</p>
            <p className={s.info}>{agent.number}</p>
          </div>
          <div className={s.agentRatings}>
            <p className={`${s.info} ${s.rating}`}>{stars}  ({agent.reviews})</p>
            <p className={`${s.info} ${s.rating}`}>{agent.sales} Recent Sales</p>
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
