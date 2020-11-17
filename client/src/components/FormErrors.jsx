/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import { errExcl } from '../utils/SVG';

/*
TODO:
Finish errors for email.

*/

const FormErrors = ({ name, number, email }) => {
  const hi = 'hi';
  return (
    <div>

      {name || number ? (
        <div id="errNamePhone">
          {name ? (
            <div className="formErr">{errExcl}<p className="errText">Enter your name.</p></div>
          ) : null }
          {number ? (
            <div className="formErr" id="errPhone">{errExcl}
              <p className="errText">Enter a valid phone<br />number.</p>
            </div>
          ) : null }
        </div>
      ) : null}
      {email ? (
        <div className="formErr">{errExcl}<p className="errEmail">Enter a valid email.</p></div>
      ) : null}
    </div>

  );
};

FormErrors.propTypes = {
  name: PropTypes.bool.isRequired,
  number: PropTypes.bool.isRequired,
  email: PropTypes.bool.isRequired,
};

export default FormErrors;
