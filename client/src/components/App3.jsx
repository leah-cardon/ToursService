import React, { useState, useEffect } from 'react';

import { getData, submitForm } from '../utils/Logic';

import TourRequest from './TourRequest';
import RequestModule from './RequestModule/RequestModule';
import TourModule from './TourModule/TourModule';

const App = () => {
  // State for API calls
  const [requests, setRequests] = useState([]);
  const [agents, setAgents] = useState([]);

  // State for user inputs
  const [tour, toggleTour] = useState(true);
  const [call, setCall] = useState(false);

  useEffect(() => {
    getData(setRequests, setAgents);
  }, []);

  const submit = (form) => {
    submitForm({ call, ...form }).then(() => getData(setRequests, setAgents));
  };

  return (
    <div className="appContainer">
      <TourRequest tour={tour} toggleTour={toggleTour} />

      {tour ? (<TourModule submit={submit} call={call} setCall={setCall} requests={requests} />)
        : (<RequestModule submit={submit} call={call} setCall={setCall} agents={agents} />)}

    </div>
  );
};

export default App;
