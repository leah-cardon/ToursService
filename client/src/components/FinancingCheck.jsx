import React from 'react';
import PropTypes from 'prop-types';

import { checkMark } from '../utils/SVG';

/*
TODO:
FINISH CHECKBOX
Styling
*/

const FinancingCheck = ({ call, setCall }) => {
  const toggle = () => setCall((currentCall) => !currentCall);

  const yesCall = (<p>A licensed lender will call you soon</p>);
  const noCall = (<p>I want to talk about financing</p>);

  return (
    <div id="financeBox">
      <div id="checkContainer">
        <input id="finBox" type="checkbox" onChange={toggle} />
        {checkMark}
      </div>
      <label htmlFor="finBox" id="financeMessage">{call ? yesCall : noCall}</label>
    </div>
  );
};

FinancingCheck.propTypes = {
  call: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
};

export default FinancingCheck;
