import React from 'react';
import Spinner from '../../components/spinner/spinner.component';

const WithSpinner = WrappedCompoennt => ({ isLoading, ...rest }) => {
  return isLoading ? <Spinner/> : <WrappedCompoennt {...rest}/>;
};

export default WithSpinner;
