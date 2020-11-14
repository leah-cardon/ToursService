import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RequestModule from './RequestModule/RequestModule';
import TourModule from './TourModule/TourModule';

/*

*/

const App = () => {
  // State for API stuff
  const [requests, setRequests] = useState([]);
  const [agents, setAgents] = useState([]);

  // State for user inputs
  const [tour, toggleTour] = useState(true);
  const [financeCall, setCall] = useState(false);

  const getData = () => axios.get('/api/tours/requests')
    .then((response) => {
      setRequests(response.data);
      return axios.get('/api/tours/agents');
    })
    .then((response) => setAgents(response.data))
    .catch((err) => console.log(err));

  useEffect(() => {
    // API call which uses setRequests to grab requests
    // should we watch any state vars?
    getData();
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
        <button id="toggleTour" onClick={() => toggleTour(true)} type="button">
          Schedule A Tour
        </button>

        <button id="toggleRequest" onClick={() => toggleTour(false)} type="button">
          Request Info
        </button>
      </div>

      {
        tour ? (
          <TourModule financeCall={financeCall} setCall={setCall} requests={requests} />
        )
          : (<RequestModule financeCall={financeCall} setCall={setCall} agents={agents} />)
      }

    </div>
  );
};

export default App;
