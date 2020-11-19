import React from 'react';
import PropTypes from 'prop-types';

import { checkMark } from '../utils/SVG';
import s from '../styles/FinancingCheck.css';

const yesCall = (<p>A licensed lender will call you soon</p>);
const noCall = (<p>I want to talk about financing</p>);

const FinancingCheck = ({ call, setCall }) => {
  const toggle = () => setCall((currentCall) => !currentCall);

  return (
    <div id={s.container}>
      <div id={s.checkContainer}>
        <input id={s.box} type="checkbox" onChange={toggle} />
        {checkMark}
      </div>
      <label htmlFor={s.box} id={s.message}>{call ? yesCall : noCall}</label>
    </div>
  );
};

FinancingCheck.propTypes = {
  call: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
};

export default FinancingCheck;
