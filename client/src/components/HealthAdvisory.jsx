import React from 'react';

import ReactTooltip from 'react-tooltip';
import { caution } from '../utils/SVG';
import s from '../styles/Disclaimer.css';

const text = 'In-person tours may not currently allow for safe\nsocial distancing or comply with public health orders';

const HealthAdvisory = () => (
  <div>
    <p id={s.warning} data-tip data-for={s.healthTooltip}>{caution} Public Health Advisory</p>

    <ReactTooltip id={s.healthTooltip} className="opaque" place="top" effect="solid" type="light">{text}</ReactTooltip>
  </div>
);

export default HealthAdvisory;
