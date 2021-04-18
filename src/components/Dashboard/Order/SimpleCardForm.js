import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const SimpleCardForm = ({serviceName}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [ paymentError, setPaymentError] = useState(null);
  const [ paymentSuccess, setPaymentSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    }else {
      console.log("[PaymentMethod]", paymentMethod);
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      const orderDetails = {
        ...data,
        paymentInfo: paymentMethod.id,
        orderTime: new Date(),
      };
      fetch("https://goclean-react.herokuapp.com/addOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              placeholder="Your Name"
              type="text"
              className="form-control col"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Your Email"
              type="text"
              className="form-control"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              defaultValue={serviceName}
              type="text"
              className="form-control"
              {...register("service", { required: true })}
            />
          </div>
          {/* <div className="d-flex justify-content-center">
          <input className="form-control w-25 btn-dark" type="submit" />
        </div> */}

          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "20px",
                  color: "#424770",
                  backgroundColor: "#ffffff",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="form-control"
          />
          <Button
            className="form-control my-2"
            variant="dark"
            type="submit"
            disabled={!stripe}
          >
            Submit
          </Button>
          {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
          {paymentSuccess && (
            <p style={{ color: "green" }}>Your Payment was Successful</p>
          )}
        </form>
  );
};

export default SimpleCardForm;