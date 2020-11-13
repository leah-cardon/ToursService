import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FinancingCheck from './FinancingCheck';

const RequestForm = ({ displayFinance, financeCall, setCall }) => {
  const [{ name, phone, email }, setForm] = useState({ name: '', phone: '', email: '' });

  const handleChange = (e) => setForm((state) => ({ ...state, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit these: ', name, phone, email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} placeholder="Name" onChange={handleChange} />
        <input name="phone" value={phone} placeholder="Phone" onChange={handleChange} />
        <input name="email" value={email} placeholder="Email" onChange={handleChange} />
        {displayFinance ? (<FinancingCheck financeCall={financeCall} setCall={setCall} />) : null}
        <button type="submit">Request Info</button>
      </form>
    </div>
  );
};

RequestForm.propTypes = {
  displayFinance: PropTypes.bool.isRequired,
  financeCall: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
};

export default RequestForm;
