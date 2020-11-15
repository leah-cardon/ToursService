import React from 'react';
import PropTypes from 'prop-types';

// Need hyperlinks on "Terms of Use" and "real estate professionals"!
const Disclaimer = ({ name }) => (
  <div>
    <p>
      By pressing
      {` ${name}`}
      {/* eslint-disable-next-line max-len */}
      , you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use Trulia does not endorse any real estate professionals
    </p>
  </div>
);

Disclaimer.propTypes = { name: PropTypes.string.isRequired };

export default Disclaimer;
