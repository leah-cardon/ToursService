import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { validate } from '../utils/Logic';

import FinancingCheck from './FinancingCheck';
import FormErrors from './FormErrors';

/*
TODO:
Need property name from whoever's module that is.
Prevent submit if any errors
*/

const RequestForm = ({ tour, call, setCall, submit }) => {
  const [form, setForm] = useState({
    name: '', number: '', email: '', message: '',
  });
  const [errors, setError] = useState({ name: false, number: false, email: false });

  useEffect(() => {
    setForm((state) => ({ ...state, message: 'I am interested in this property!' }));
  }, []);

  const verify = (e) => validate(e.target.name, form, setError);

  const onChange = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
  };

  const phoneRegex = '^\\(?([0-9]{3})\\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$';
  const buttonName = tour ? 'Schedule A Tour' : 'Request Info';
  const interested = (<textarea name="message" value={form.message} onChange={onChange} className="inputField" />);

  return (
    <form onSubmit={handleSubmit}>

      <div id="namePhoneFlex">
        <input name="name" value={form.name} placeholder="Name" onChange={onChange} onBlur={verify} className="inputField" required />
        <input name="number" type="tel" pattern={phoneRegex} value={form.number} placeholder="Phone" onChange={onChange} onBlur={verify} className="inputField" required />
      </div>
      <FormErrors name={errors.name} number={errors.number} />

      <input name="email" id="emailForm" type="email" value={form.email} placeholder="Email" onChange={onChange} onBlur={verify} className="inputField" required />
      <FormErrors email={errors.email} />

      {tour ? (<FinancingCheck call={call} setCall={setCall} />) : interested}

      <button type="submit">{buttonName}</button>
    </form>
  );
};

RequestForm.propTypes = {
  tour: PropTypes.bool.isRequired,
  call: PropTypes.bool.isRequired,
  setCall: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default RequestForm;
