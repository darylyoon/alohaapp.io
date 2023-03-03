import React from "react";

function Confirmation() {
    return (
        <div class="confirmation">
            <img src={require('../assets/check-mark.png')} alt="..."/>
            <h4>Payment Succesful</h4>
            <p>Your experience has been booked.<br/>We will send you an email with you booking details.</p>
        </div>
    );
}

export default Confirmation;