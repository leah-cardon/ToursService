import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { validate } from '../../utils/Logic';
import s from '../../styles/Form.css';

import FinancingCheck from '../FinancingCheck';
import FormErrors from './FormErrors';

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
    if (tour) { delete form.message; }
    if (verifyAll()) { submit(form); }
  };

  const phoneRegex = '^\\(?([0-9]{3})\\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$';
  const buttonName = tour ? 'Schedule A Tour' : 'Request Info';
  const interested = (<textarea id={s.message} name="message" value={form.message} onChange={onChange} className={s.field} />);

  return (
    <form id="tourReqForm" onSubmit={handleSubmit}>

      <div id={s.container}>
        <input name="name" value={form.name} placeholder="Name" onChange={onChange} onBlur={verify} className={s.field} required />
        <input name="number" type="tel" pattern={phoneRegex} value={form.number} placeholder="Phone" onChange={onChange} onBlur={verify} className={s.field} required />
      </div>

      <FormErrors name={errors.name} number={errors.number} />

      <input name="email" id={s.email} type="email" value={form.email} placeholder="Email" onChange={onChange} onBlur={verify} className={s.field} required />

      <FormErrors email={errors.email} />

      {tour ? (<FinancingCheck call={call} setCall={setCall} />) : interested}

      <button id={s.submit} type="submit">{buttonName}</button>
      {!tour && (<FinancingCheck call={call} setCall={setCall} />)}
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
