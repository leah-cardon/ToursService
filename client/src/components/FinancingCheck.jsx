import React from 'react';
import PropTypes from 'prop-types';

/*
TODO:
FINISH CHECKBOX
Styling.
*/

const FinancingCheck = ({ call, setCall }) => {
  const toggle = () => setCall((currentCall) => !currentCall);

  const yesCall = (<p>A licensed lender will call you soon</p>);
  const noCall = (<p>I want to talk about financing</p>);

  return (
    <div id="financeBox">
      <input id="finBox" type="checkbox" onChange={toggle} />
      <label htmlFor="finBox" id="financeMessage">{call ? yesCall : noCall}</label>
    </div>
  );
};

FinancingCheck.propTypes = {
  call: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
};

export default FinancingCheck;
