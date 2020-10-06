import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./StripeCheckoutButton.css";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HZ3QVH7TlpMJmGQ7vGoNONzcswIc7DznD1rB28UZ9deHNzkAlJfVKLHBnhNSTJoDfUwqo66S8B4aZuKnmjIHhsm00TrL3Qvuu";
  const onToken = (token) => {
    alert("Payment successfull.");
    console.log(token);
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='IBMA CLOTHING'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now!'
      onToken={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
