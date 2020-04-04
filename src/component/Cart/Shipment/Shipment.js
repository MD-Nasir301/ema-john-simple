import React from "react";
import { useForm } from "react-hook-form";
import "./Shipment.css";
import { useAuth } from "../../login/useAuth";
import {
  getDatabaseCart,
  processOrder
} from "../../../utilities/databaseManager";
import {loadStripe} from '@stripe/stripe-js';
import { Elements,} from '@stripe/react-stripe-js';
import CheckoutForm from "../../CheckoutForm/CheckoutForm";
const Shipment = () => {
  const { register, handleSubmit, errors } = useForm();
  const auth = useAuth();
  const stripePromise = loadStripe('pk_test_sMbPXhXqw3gfPsXu1KLvUZXr00AchgIHNQ');

  const onSubmit = data => {
    // TODO:Nasir send

    const saveCart = getDatabaseCart();
    const orderDetails = {
      email: auth.user.email,
      cart: saveCart,
      shipment: data
    };
    fetch("https://blooming-thicket-11100.herokuapp.com/placeOrder", {
      method: "post",
      body: JSON.stringify(orderDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(order => {
        console.log(order);
        alert("thank you for order");
        processOrder();
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              defaultValue={auth.user.name}
              ref={register({ required: true })}
              placeholder="Your Name"
            />
            {errors.name && <span className="error">Name is required</span>}

            <input
              name="email"
              defaultValue={auth.user.email}
              ref={register({ required: true })}
              placeholder="Your Email"
            />
            {errors.email && <span className="error">Email is required</span>}
            <input
              name="AddressLine1"
              ref={register({ required: true })}
              placeholder="Address Line 1"
            />
            {errors.AddressLine1 && (
              <span className="error">Address is required</span>
            )}
            <input
              name="AddressLine2"
              ref={register}
              placeholder="Address Line 1"
            />
            <input
              name="city"
              ref={register({ required: true })}
              placeholder="City"
            />
            {errors.city && <span className="error">City is required</span>}
            <input
              name="country"
              ref={register({ required: true })}
              placeholder="Country"
            />
            {errors.country && (
              <span className="error">Country is required</span>
            )}
            <input
              name="zipcode"
              ref={register({ required: true })}
              placeholder="Zip Code"
            />
            {errors.zipcode && (
              <span className="error">Zip Code is required</span>
            )}

            <input type="submit" />
          </form>
        </div>
        <div className="col-md-6">
          <h1>Payment check out </h1>
          <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
        </Elements>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
