import React from 'react';
import PropTypes from 'prop-types';

import { errExcl } from '../../utils/SVG';

const nameErr = (<p className="errText">Enter your name.</p>);
const phoneErr = (<p className="errText">Enter a valid phone<br />number.</p>);
const emailErr = (<p className="errText">Enter a valid email.</p>);

const FormErrors = ({ name, number, email }) => (
  <div>
    {name || number ? (
      <div id="errNamePhone">

        {name ? (<div className="formErr">{errExcl}{nameErr}</div>) : null }
        {number ? (<div className="formErr" id="errPhone">{errExcl}{phoneErr}</div>) : null }

      </div>
    ) : null}

    {email ? (<div className="formErr" id="errEmail">{errExcl}{emailErr}</div>) : null}
  </div>
);

FormErrors.propTypes = {
  name: PropTypes.bool.isRequired,
  number: PropTypes.bool.isRequired,
  email: PropTypes.bool.isRequired,
};

export default FormErrors;
