/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import FinancingCheck from './FinancingCheck';

/*
TODO:
Need property name from whoever's module that is.
Need to write API submit logic.

*/

const RequestForm = ({
  tour, call, setCall, submit,
}) => {
  const [form, setForm] = useState({
    name: '', number: '', email: '', message: '',
  });

  // When we have list of properties, we'll pass that prop in here.
  useEffect(() => {
    setForm((state) => ({ ...state, message: 'I am interested in property' }));
  }, []);

  const onChange = (e) => setForm((state) => ({ ...state, [e.target.name]: e.target.value }));

  // Finish this!
  const handleSubmit = (e) => {
    e.preventDefault();
    const toSubmit = { ...form };
    toSubmit.message === '' ? delete toSubmit.message : null;
    submit(toSubmit);
  };

  const phoneRegex = '^\\(?([0-9]{3})\\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$';
  const buttonName = tour ? 'Schedule A Tour' : 'Request Info';
  const interested = (<textarea name="message" value={form.message} onChange={onChange} />);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} placeholder="Name" onChange={onChange} required />
        <input name="number" type="tel" pattern={phoneRegex} value={form.number} placeholder="Phone" onChange={onChange} required />
        <input name="email" type="email" value={form.email} placeholder="Email" onChange={onChange} required />
        {tour ? (<FinancingCheck call={call} setCall={setCall} />) : interested}
        <button type="submit">{buttonName}</button>
      </form>
    </div>
  );
};

RequestForm.propTypes = {
  tour: PropTypes.bool.isRequired,
  call: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default RequestForm;
