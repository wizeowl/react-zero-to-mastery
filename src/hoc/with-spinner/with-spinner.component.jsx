import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedCompoennt => ({ isLoading, ...rest }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
  ) : (
    <WrappedCompoennt {...rest}/>
  );
};

export default WithSpinner;
