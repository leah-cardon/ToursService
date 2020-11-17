import React from 'react';
import PropTypes from 'prop-types';

/*
TODO
Need hyperlinks on "Terms of Use" and "real estate professionals"!
Styling
*/

const lastText = ', you agree that Trulia and real estate professionals may contact you via phone/text about your inquiry, which may involve the use of automated means. You are not required to consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use Trulia does not endorse any real estate professionals';

const Disclaimer = ({ tour }) => {
  const name = tour ? 'Schedule A Tour' : 'Request Info';

  return (
    <div>
      <p>
        By pressing
        {` ${name}`}
        {lastText}
      </p>
    </div>
  );
};

Disclaimer.propTypes = { tour: PropTypes.bool.isRequired };

export default Disclaimer;
