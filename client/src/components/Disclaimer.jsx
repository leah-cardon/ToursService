/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const Disclaimer = ({ tour }) => {
  const name = tour ? 'Schedule A Tour' : 'Request Info';

  const terms = (<a className="terms" target="_blank" rel="noreferrer" href="https://www.trulia.com/terms">Terms of Use</a>);

  const agentDiscl = (<p data-tip data-for="disclToolTip" data-place="top" className="terms">real estate professionals</p>);

  const disclText = 'Real estate professionals include the real estate agents and brokers, mortgage\nlenders and loan officers, property managers, and other professionals you\ninteract with through Trulia.';

  const hover = (<p style={{ whiteSpace: 'pre-wrap' }}>{disclText}</p>);

  return (
    <div>
      <p id="disclaimerText">
        By pressing {name}, you agree that Trulia and real estate professionals may contact you
        via phone/text about your inquery, which may involve the use of automated means. You are not
        required to consent as a condition of purchasing any property, goods or services.
        Message/data rates may apply. You also agree to our {terms}. Trulia does not endorse
        any {agentDiscl}.
      </p>
      <ReactTooltip id="disclToolTip" place="top" effect="solid" type="light">{hover}</ReactTooltip>
    </div>
  );
};

Disclaimer.propTypes = { tour: PropTypes.bool.isRequired };

export default Disclaimer;
