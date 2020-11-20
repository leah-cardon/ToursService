import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import s from '../styles/Disclaimer.css';

import HealthAdvisory from './HealthAdvisory';

const disclText = 'Real estate professionals include the real estate agents and brokers, mortgage\nlenders and loan officers, property managers, and other professionals you\ninteract with through Trulia.';
const terms = (<a className={s.terms} target="_blank" rel="noreferrer" href="https://www.trulia.com/terms">Terms of Use</a>);
const agentDiscl = (<p data-tip data-for={s.tooltip} data-place="top" className={s.terms}>real estate professionals</p>);

const Disclaimer = ({ tour }) => {
  const hover = (<p style={{ whiteSpace: 'pre-wrap' }}>{disclText}</p>);
  const name = tour ? 'Schedule A Tour' : 'Request Info';

  return (
    <div>
      {tour && <HealthAdvisory />}
      <p id={s.text}>
        By pressing {name}, you agree that Trulia and real estate professionals may contact you
        via phone/text about your inquery, which may involve the use of automated means. You are not
        required to consent as a condition of purchasing any property, goods or services.
        Message/data rates may apply. You also agree to our {terms}. Trulia does not endorse
        any {agentDiscl}.
      </p>
      <ReactTooltip id={s.tooltip} className="opaque" place="top" effect="solid" type="light">{hover}</ReactTooltip>
    </div>
  );
};

Disclaimer.propTypes = { tour: PropTypes.bool.isRequired };

export default Disclaimer;
