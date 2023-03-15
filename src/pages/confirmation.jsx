import React from "react";

function Confirmation() {
    return (
        <div class="confirmation">
            <img src={require('../assets/plant.png')} alt="..."/>
            <h4>Booking Confirmed</h4>
            <p>Thank you for planting a seed towards sustainability and a fruitful team experience!</p>

            <div class="container-fluid">
            <div class="row">

                <div class="col-6">
                    <div class="card carded">
                    <div class="card-body">
                        <h3 class="card-title">Experience Details</h3>
                        <hr/>
                        <p class="card-text"><b>Experience:</b><br/>Lunch & Learn: Let’s Stop Eating Plastic</p>
                        <p class="card-text"><b>Location:</b><br/>Clementi Park, Singapore 123456</p>
                        <p class="card-text"><b>Time:</b><br/>9:00am - 12:00pm</p>
                        <p class="card-text"><b>Participants:</b><br/>49</p>
                        <p class="card-text"><b>Date:</b><br/>21 February 2023, Monday</p>
                    </div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card cardbd">
                    <div class="card-body">
                    <h3 class="card-title">Booking Details</h3>
                        <hr/>
                        <p class="card-text"><b>Booker Name:</b><br/>John Doe</p>
                        <p class="card-text"><b>Email:</b><br/>johndoe@spvglobal.io</p>
                        <p class="card-text"><b>Mobile:</b><br/>+65 8123 4567</p>
                        <p class="card-text"><b>Company Name:</b><br/>Aloha</p>
                        <p class="card-text"><b>Amount Paid:</b><br/>$200.00</p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default Confirmation;