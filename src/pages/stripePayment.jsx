import { React,  useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import getPaymentIntent from '../stripe-use';
import { useLocation } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

function Stripe() {

    const stripePromise = loadStripe('pk_test_51MnLSLFXC7CDXqcPSbTHw4nothSGJskhJmPI2GqwgRUpdacMha2NAjQlsk2kOGltbh0QcsUKwUVLWSRlVaM9cw8o00jhJTWqCv');

    const navigate = useNavigate();

    const location = useLocation();

    const bookingInfo = location.state;
    console.log(bookingInfo)

    // make use of useState to get the client secret from the server
    const [p_intent, setP_intent] = useState({});
    const [loading, setLoading] = useState(false);
    const getClientSecret = async () => {
        setLoading(true);
        const p_intent = await getPaymentIntent();
        setP_intent(p_intent);
        setLoading(false);
    };
    // use useEffect to call getClientSecret() once
    useEffect(() => {
        getClientSecret();
    }, []);
    if (loading) {
        return <div>loading</div>;
    }
    const options = {
        // passing the client secret obtained from the server
        clientSecret: p_intent.client_secret
    };

    return (
        <div className='stripecheckout'>
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
        </div>
    );
}

export default Stripe;