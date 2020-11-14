import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FinancingCheck from './FinancingCheck';

const RequestForm = ({ tour, financeCall, setCall }) => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', interest: '',
  });

  const handleChange = (e) => setForm((state) => ({ ...state, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit these: ', form.name, form.phone, form.email, form.interest);
  };

  useEffect(() => {
    setForm((state) => ({ ...state, interest: 'I am interested in property' }));
  });

  const interested = (
    <textarea name="interest" value={form.interest} onChange={handleChange} />
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} placeholder="Name" onChange={handleChange} />
        <input name="phone" value={form.phone} placeholder="Phone" onChange={handleChange} />
        <input name="email" value={form.email} placeholder="Email" onChange={handleChange} />
        {tour ? (<FinancingCheck financeCall={financeCall} setCall={setCall} />) : interested}
        <button type="submit">Request Info</button>
      </form>
    </div>
  );
};

RequestForm.propTypes = {
  tour: PropTypes.bool.isRequired,
  financeCall: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
};

export default RequestForm;
