import React from 'react';

import './spinner.styles.scss';
import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer/>
  </SpinnerOverlay>
);

export default Spinner;
