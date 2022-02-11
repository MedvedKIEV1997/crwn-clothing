import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CRWNswg from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KS3gKKypKh6bkHDOC4GJUdtpe1y2WHbs3AdS4fVHSR81nZaeCJWscyRD8Ut8kZAkNs1j9hVRbfvIc6bv1XAORqn00oigpEOG8";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image={CRWNswg}
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
