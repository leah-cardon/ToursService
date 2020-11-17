import React, { useState, useEffect } from 'react';

import { getData, submitForm } from '../utils/Logic';

import TourRequest from './TourRequest';
import TourType from './TourType';
import Calendar from './Calendar/Calendar';
import TimeDropdown from './Calendar/TimeDropdown';
import RequestForm from './Form/RequestForm';
import Disclaimer from './Disclaimer';
import AgentList from './Agents/AgentList';

const App = () => {
  // State for API calls
  const [requests, setRequests] = useState([]);
  const [agents, setAgents] = useState([]);

  // State for user inputs
  const [tour, toggleTour] = useState(true);
  const [digital, setDigital] = useState(false);
  const [currentDate, setDate] = useState('');
  const [call, setCall] = useState(false);
  const [time, setTime] = useState('');
  const [agent, setAgent] = useState('');

  useEffect(() => {
    getData(setRequests, setAgents);
  }, []);

  const submit = (form) => {
    const toSubmit = !tour ? { agent, ...form }
      : { date: currentDate, type: digital, time, ...form };
    submitForm({ call, ...toSubmit }).then(() => getData(setRequests, setAgents));
  };

  return (
    <div className="appContainer">
      <TourRequest tour={tour} toggleTour={toggleTour} />
      <div id="moduleContainer">
        {tour ? (
          <div>
            <TourType digital={digital} setDigital={setDigital} />
            <Calendar currentDate={currentDate} setDate={setDate} />
            <TimeDropdown occupied={requests} currentDate={currentDate} setTime={setTime} />
          </div>
        ) : null}
        <RequestForm tour={tour} call={call} setCall={setCall} submit={submit} />
        <Disclaimer tour={tour} />
        {!tour ? (<AgentList agents={agents} setAgent={setAgent} />) : null}
      </div>

    </div>
  );
};

export default App;
