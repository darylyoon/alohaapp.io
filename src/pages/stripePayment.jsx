import { React, useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import getPaymentIntent from "../stripe-use";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

function Stripe() {
  // const navigate = useNavigate();
  const location = useLocation();
  const [bookingInfo, setBookingInfo] = useState({});
  const [p_intent, setP_intent] = useState({});
  const [stripePromise, setStripePromise] = useState(null);
  const [loading, setLoading] = useState(false);
  const isSubscribedRef = useRef(true);

  useEffect(() => {
    const getClientSecret = async () => {
      setLoading(true);
      const stripePromise = await loadStripe(
        "pk_test_51MnLSLFXC7CDXqcPSbTHw4nothSGJskhJmPI2GqwgRUpdacMha2NAjQlsk2kOGltbh0QcsUKwUVLWSRlVaM9cw8o00jhJTWqCv"
      );
      const p_intent = await getPaymentIntent(location.state.bookingInfo.pay_amount);
      if (!isSubscribedRef.current) {
        setLoading(false);
        return;
      }
      setStripePromise(stripePromise);
      setP_intent(p_intent);
      setBookingInfo(location.state.bookingInfo);
      setLoading(false);
      isSubscribedRef.current = false;
    };
    if (isSubscribedRef.current){
      getClientSecret();
    }
    // getClientSecret();
  
    return () => {
      console.log("Component unmounted");
    };
  }, [location.state.bookingInfo]);

  if (loading) {
    return <div>loading</div>;
  }
  const options = {
    // passing the client secret obtained from the server
    clientSecret: p_intent.client_secret,
  };
  // console.log(isSubscribedRef.current, p_intent.client_secret, stripePromise,);
  return (
    <div className="stripecheckout">
      {!isSubscribedRef.current ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm booking={bookingInfo} expID={location.state.expID} />
        </Elements>
      ) : null}
    </div>
  );
}

export default Stripe;
