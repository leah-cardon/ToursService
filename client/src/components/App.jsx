import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
  }, []);

  return (
    <div className="testApp">
      Hello World:
      {count}
    </div>
  );
};

export default App;
