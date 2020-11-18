import React from 'react';

import ReactTooltip from 'react-tooltip';
import { caution } from '../utils/SVG';

const text = 'In-person tours may not currently allow for safe\nsocial distancing or comply with public health orders';

const HealthAdvisory = () => (
  <div>
    <p id="healthWarning" data-tip data-for="healthToolTip">{caution} Public Health Advisory</p>

    <ReactTooltip id="healthToolTip" className="opaque" place="top" effect="solid" type="light">{text}</ReactTooltip>
  </div>
);

export default HealthAdvisory;
