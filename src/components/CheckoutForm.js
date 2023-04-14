import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
const CheckoutForm = (props) => {
  const booking_id = props.booking.BookingID;
  // console.log(props.booking.BookingID);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      redirect: "if_required"
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      // store props into firebase firestore
      // remove bookingID from props.booking
      delete props.booking.BookingID;
      const docRef = await setDoc(doc(db, "Booking", `B${booking_id}`), props.booking);
      navigate(`/confirmation/${booking_id}`);
    }
  };
  const options = {
    layout: "accordion",
  };
  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement options={options} />
      <button disabled={!stripe}>Submit</button>
    </form>
  )
};

export default CheckoutForm;