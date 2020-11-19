import React from 'react';
import PropTypes from 'prop-types';

import { errExcl } from '../../utils/SVG';
import s from '../../styles/FormErrors.css';

const nameErr = (<p className={s.text}>Enter your name.</p>);
const phoneErr = (<p className={s.text}>Enter a valid phone<br />number.</p>);
const emailErr = (<p className={s.text}>Enter a valid email.</p>);

const FormErrors = ({ name, number, email }) => (
  <div>
    {(name || number) && (
      <div id={s.namePhone}>
        {name && (<div className={s.container}>{errExcl}{nameErr}</div>) }
        {number && (<div className={s.container} id={s.phone}>{errExcl}{phoneErr}</div>)}
      </div>
    )}

    {email && (<div className={s.container} id={s.email}>{errExcl}{emailErr}</div>)}
  </div>
);

FormErrors.defaultProps = {
  name: null,
  number: null,
  email: null,
};

FormErrors.propTypes = {
  name: PropTypes.bool,
  number: PropTypes.bool,
  email: PropTypes.bool,
};

export default FormErrors;
