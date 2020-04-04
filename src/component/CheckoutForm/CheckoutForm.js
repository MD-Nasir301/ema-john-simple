import React from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
    const [cardError, setCardError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error){
        setCardError(error.message)
        setPaymentSuccess(null)
    }else{
        setPaymentSuccess('Payment Successful')
        setCardError(null)
        
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {
          paymentSuccess && <p>  {paymentSuccess} </p>
      }
      {
          cardError && <p>  {cardError} </p>
      }
    </form>
  );
};
export default CheckoutForm;