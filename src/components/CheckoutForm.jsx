import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { send } from 'emailjs-com';
import { db } from '../firebase';
const CheckoutForm = (props) => {
  const booking_id = props.booking.BookingID;
  // console.log(props.booking);
  // console.log(props.booking.BookingID);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  // const alohaURI = process.env.REACT_APP_PROD_ENV_URI;
  const alohaURI = process.env.REACT_APP_TEST_ENV_URI;
  const sendConfirmationEmail = async () => {
      const templateParams = {
        to_name: `${props.booking.bookerDetails?.firstName} ${props.booking.bookerDetails?.lastName}`,
        bookingid: `B${booking_id}`,
        to_email: props.booking.bookerDetails.email,
        booking_url: `${alohaURI}/confirmation/${booking_id}`
      }
      await send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_PUB_KEY);
    }
  const formatDate = (dateStr) => {
    return dateStr.replace(/\//g, '-');
  };
  
  const updateAvail = async (expID, date, time) => {
    const formattedDate = formatDate(date);
    const updateValue = {};
    updateValue[formattedDate] = {};
    updateValue[formattedDate][time] = false;
  
    const docRef = doc(db, "Availability", expID);
    try {
      await updateDoc(docRef, updateValue);
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };
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
      await updateAvail(props.expID, props.booking.Date, props.booking.Time.slice(0,4));
      await sendConfirmationEmail();
      navigate(`/confirmation/${booking_id}`);
    }
  };
  const options = {
    layout: "tabs",
  };
  return (
    <form className='paymentStripe' onSubmit={handleSubmit}>
      <PaymentElement options={options} />
      <button className='payBtn' disabled={!stripe}>Submit</button>
    </form>
  )
};

export default CheckoutForm;