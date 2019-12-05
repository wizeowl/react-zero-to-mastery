import React from 'react';

import './custom-buttom.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isInverted, ...otherProps }) => (
  <button className={`
    ${isGoogleSignIn ? 'google-sign-in' : ''}
    ${isInverted ? 'inverted' : ''}
    custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
