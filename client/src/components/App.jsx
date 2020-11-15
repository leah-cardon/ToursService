import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RequestModule from './RequestModule/RequestModule';
import TourModule from './TourModule/TourModule';

/*
TODO:
Styling is DONE in this component.
*/

const App = () => {
  // State for API stuff
  const [requests, setRequests] = useState([]);
  const [agents, setAgents] = useState([]);

  // State for user inputs
  const [tour, toggleTour] = useState(true);
  const [fCall, setCall] = useState(false);

  const getData = () => axios.get('/api/tours/requests')
    .then((response) => {
      setRequests(response.data);
      return axios.get('/api/tours/agents');
    })
    .then((response) => setAgents(response.data))
    .catch((err) => console.log(err));

  useEffect(() => {
    getData();
  }, []);

  const submit = (form) => {
    const toSend = { call: fCall, ...form };
    axios.post('/api/tours/users', toSend)
      .then(() => console.log(`Sent ${form.name}'s request to the database!`))
      .then(() => getData())
      .catch((err) => console.log(err));
  };

  const inPerson = tour ? 'selTour toggleInfo' : 'noTour toggleInfo';
  const reqInfo = !tour ? 'selTour toggleInfo' : 'noTour toggleInfo';

  return (
    <div className="appContainer">

      <div id="tourInfoContainer">
        <div className="tourGrid">
          <button className={inPerson} onClick={() => toggleTour(true)} type="button">
            Schedule A Tour
          </button>

        </div>
        <div className="tourGrid">
          <button className={reqInfo} onClick={() => toggleTour(false)} type="button">
            Request Info
          </button>

        </div>
      </div>

      <div id="moduleContainer">
        {
          tour ? (
            <TourModule submit={submit} call={fCall} setCall={setCall} requests={requests} />
          )
            : (<RequestModule submit={submit} call={fCall} setCall={setCall} agents={agents} />)
        }

      </div>

    </div>
  );
};

export default App;
