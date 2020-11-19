import React from 'react';
import PropTypes from 'prop-types';

import { errExcl } from '../../utils/SVG';

const FormErrors = ({ name, number, email }) => (
  <div>
    {name || number ? (
      <div id="errNamePhone">
        {name ? (
          <div className="formErr">{errExcl}<p className="errText">Enter your name.</p></div>
        ) : null }

        {number ? (
          <div className="formErr" id="errPhone">
            {errExcl}
            <p className="errText">Enter a valid phone<br />number.</p>
          </div>
        ) : null }

      </div>
    ) : null}

    {email ? (
      <div className="formErr" id="errEmail">{errExcl}<p className="errText">Enter a valid email.</p></div>
    ) : null}
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
