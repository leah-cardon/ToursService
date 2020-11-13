import React, { useState, useEffect } from 'react';
import RequestModule from './RequestModule';
import TourModule from './TourModule';

/*
We'll need a few modules which conditionally render.
Schedule a Tour
Request Info
flexbox side by side
On-click, sets state to show whichever

Both contain:
Name phone email financing checkbox

CURRENTLY WORKING ON:
Need to finish skeletoning out the Schedule A Tour stuff - calendar mostly.

*/

const App = () => {
  const [count, setCount] = useState(0); // temporary!
  const [financeCall, setCall] = useState(false);
  const [tour, toggleTour] = useState(true);

  useEffect(() => {
    setCount(0);
  }, []);

  // const submit = (args) => {
  //   // REQUIRED PARAMS: name, phone, email
  //   //  financing call(boolean)
  //   // REQUEST ONLY: which agent
  //   // SCHEDULE ONLY: in-person/video chat, date, time
  // };

  return (
    <div className="testApp">

      <div id="tourInfoContainer">
        <button id={`${count}`} onClick={() => toggleTour(true)} type="button">
          Schedule A Tour
        </button>

        <button id="toggleRequest" onClick={() => toggleTour(false)} type="button">
          Request Info
        </button>
      </div>

      {
        tour ? (<TourModule financeCall={financeCall} setCall={setCall} />)
          : (<RequestModule financeCall={financeCall} setCall={setCall} />)
      }

    </div>
  );
};

export default App;
