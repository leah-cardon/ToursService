import React from 'react';
import PropTypes from 'prop-types';

/*
TODO:
FINISH CHECKBOX
*/

const FinancingCheck = ({ financeCall, setCall }) => {
  const toggle = () => setCall((currentCall) => !currentCall);

  const yesCall = (<p>A licensed lender will call you soon</p>);
  const noCall = (<p>I want to talk about financing</p>);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={toggle}
    >
      <div id="checkbox">CHECKBOX</div>
      <div id="financeMessage">{financeCall ? yesCall : noCall}</div>

    </div>
  );
};

FinancingCheck.propTypes = {
  financeCall: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
};

export default FinancingCheck;
