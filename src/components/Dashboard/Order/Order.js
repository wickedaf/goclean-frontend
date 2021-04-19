import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";


const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { serviceName } = useParams();

  const stripePromise = loadStripe(
    "pk_test_51IedHTESh9pUcUBoQMCcbL2E8Yo2kp4AzBDHZFLVI0o8oPRSz8hjKeV4Nr83hNgiSJlmoUMAyIarULb2VOiFgyhB00nAy2zZrr"
  );

  return (
    <div className="mt-5 ml-5">
      <Elements stripe={stripePromise}>
        <SimpleCardForm loggedInUser={loggedInUser} serviceName={serviceName}></SimpleCardForm>
      </Elements>
    </div>
  );
};

export default Order;
