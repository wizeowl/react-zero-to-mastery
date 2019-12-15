import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Z0Mz91c3USzfEG1Y2WbIqV0A003l5nPQTr';
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: { amount: priceForStripe, token }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippigAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;