import React, { useContext, useState, useEffect } from "react";
import { Elements, CardElement, useStripe } from "@stripe/react-stripe-js";
//import StripeCheckout from "./StripeCheckout";
import Scheduler from "./Scheduler";

export default function StripeElement(props) {
  console.log("stripePromise is set to: " + props.stripePromise, props);

  return (
    <Elements stripe={props.stripePromise}>
      <Scheduler
        customerID={props.customerID}
        items={props.items}
        notes={props.notes}
        infoSubmitted={props.infoSubmitted}
        fName={props.fName}
        email={props.email}
        phoneNum={props.phoneNum}
        date={props.date}
        purchaseDate={props.purchaseDate}
        selectedTime={props.selectedTime}
        cost={props.cost}
        treatmentName={props.treatmentName}
        duration={props.duration}
        image_url={props.image_url}
      />
    </Elements>
  );
}
