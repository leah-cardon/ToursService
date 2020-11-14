import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FinancingCheck from './FinancingCheck';

/*
TODO:
Need property name from whoever's module that is.
Need to write API submit logic.

*/

const RequestForm = ({ tour, financeCall, setCall }) => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', interest: '',
  });

  // When we have list of properties, we'll pass that prop in here.
  useEffect(() => {
    setForm((state) => ({ ...state, interest: 'I am interested in property' }));
  }, []);

  const onChange = (e) => setForm((state) => ({ ...state, [e.target.name]: e.target.value }));

  // Finish this!
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit these: ', form.name, form.phone, form.email, form.interest);
  };

  const buttonName = tour ? 'Schedule A Tour' : 'Request Info';
  const interested = (<textarea name="interest" value={form.interest} onChange={onChange} />);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} placeholder="Name" onChange={onChange} />
        <input name="phone" value={form.phone} placeholder="Phone" onChange={onChange} />
        <input name="email" value={form.email} placeholder="Email" onChange={onChange} />
        {tour ? (<FinancingCheck financeCall={financeCall} setCall={setCall} />) : interested}
        <button type="submit">{buttonName}</button>
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
