import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { validate } from '../../utils/Logic';

import FinancingCheck from '../FinancingCheck';
import FormErrors from './FormErrors';

// TO DO: Need property name from whoever's module that is.
const RequestForm = ({ tour, call, setCall, submit }) => {
  const [form, setForm] = useState({
    name: '', number: '', email: '', message: '',
  });
  const [errors, setError] = useState({ name: false, number: false, email: false });

  useEffect(() => {
    setForm((state) => ({ ...state, message: 'I am interested in this property!' }));
  }, []);

  const verify = (e) => validate(e.target.name, form, setError);

  const verifyAll = () => {
    ['name', 'number', 'email'].forEach((name) => validate(name, form, setError));
    return !!(errors.name || errors.number || errors.email);
  };

  const onChange = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const toSubmit = { ...form };
    tour ? delete toSubmit.message : null;
    verifyAll ? submit(toSubmit) : null;
  };

  const phoneRegex = '^\\(?([0-9]{3})\\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$';
  const buttonName = tour ? 'Schedule A Tour' : 'Request Info';
  const interested = (<textarea id="reqMessage" name="message" value={form.message} onChange={onChange} className="inputField" />);

  return (
    <form id="userForm" onSubmit={handleSubmit}>

      <div id="namePhoneFlex">
        <input name="name" value={form.name} placeholder="Name" onChange={onChange} onBlur={verify} className="inputField" required />
        <input name="number" type="tel" pattern={phoneRegex} value={form.number} placeholder="Phone" onChange={onChange} onBlur={verify} className="inputField" required />
      </div>
      <FormErrors name={errors.name} number={errors.number} />

      <input name="email" id="emailForm" type="email" value={form.email} placeholder="Email" onChange={onChange} onBlur={verify} className="inputField" required />
      <FormErrors email={errors.email} />

      {tour ? (<FinancingCheck call={call} setCall={setCall} />) : interested}

      <button id="tourSubmit" type="submit">{buttonName}</button>
      {!tour ? (<FinancingCheck call={call} setCall={setCall} />) : null}
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
