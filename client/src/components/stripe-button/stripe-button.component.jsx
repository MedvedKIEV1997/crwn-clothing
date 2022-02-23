import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CRWNswg from "../../assets/crown.svg";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KS3gKKypKh6bkHDOC4GJUdtpe1y2WHbs3AdS4fVHSR81nZaeCJWscyRD8Ut8kZAkNs1j9hVRbfvIc6bv1XAORqn00oigpEOG8";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful");
      })
      .catch((err) => {
        console.log("Payment error: ", JSON.parse(err));
        alert("There was an issue with your payment");
      });
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
