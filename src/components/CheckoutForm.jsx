import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { getSessionData } from "../api/scholarship";


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.
const stripePromise = loadStripe("pk_test_51O5rZwDJqC99h37UQJhl03wcFWHOb46p3x4mnXZ8bmDQX7fCTLYcKB9YbL6yoR6aZFIgHl9ndAU9FVjaX2hNDJX900DwIGs0aI");

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState('');
  
    const fetchSession = async () => {
      const data = await  getSessionData();
      setClientSecret(data.clientSecret);
    }
  
  
    useEffect(() => {
      fetchSession();
    }, []);

  return (
    <main id="main" style={{marginTop: "200px"}}>
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret}}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
    </main>
  )
}


export default CheckoutForm;