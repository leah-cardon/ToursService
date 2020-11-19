import React from 'react';
import PropTypes from 'prop-types';

import { errExcl } from '../../utils/SVG';

const nameErr = (<p className="errText">Enter your name.</p>);
const phoneErr = (<p className="errText">Enter a valid phone<br />number.</p>);
const emailErr = (<p className="errText">Enter a valid email.</p>);

const FormErrors = ({ name, number, email }) => (
  <div>
    {(name || number) && (
      <div id="errNamePhone">
        {name && (<div className="formErr">{errExcl}{nameErr}</div>) }
        {number && (<div className="formErr" id="errPhone">{errExcl}{phoneErr}</div>)}
      </div>
    )}

    {email && (<div className="formErr" id="errEmail">{errExcl}{emailErr}</div>)}
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
