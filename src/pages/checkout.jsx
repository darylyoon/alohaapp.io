import React from "react";

function Checkout() {
    return (
        <div class="checkout">
            {/* Checkout Back Button */}
            <button class="checkout_back_button">
                <span class="arrow_back">&#8249;</span>
                <span class="back_text">Back</span>
            </button>

            {/* Checkout Group */}
            <div class="container-fluid checkout_group">
                <div class="row">
                <div class="col-5 checkout_details">
                    <div class="checkout_details_header">
                        Your Experience
                    </div>

                    <hr class="hr_checkout"/>

                    <div class="row co_first">
                        <table class="experience_detail_table w-auto">
                            <tr>
                                <td class="w-25" rowSpan={5}>
                                    <img class="experience_cover_image" src={require('../assets/plastic_waste.jpg')} alt="" />
                                </td>
                                <th class="experience_title w-75" colSpan={2}>
                                    Lunch & Learn: Let's Stop Eating Plastic
                                </th>
                            </tr>

                            <tr>
                                <td className="detail_alignment">Date:</td>
                                <td className="detail_alignment">21 February 2023, Monday</td>
                            </tr>

                            <tr>
                                <td className="detail_alignment">Location:</td>
                                <td className="detail_alignment">Clementi Park Singapore 123456</td>
                            </tr>

                            <tr>
                                <td className="detail_alignment">Time:</td>
                                <td className="detail_alignment">09:00am - 12:00pm</td>
                            </tr>

                            <tr>
                                <td className="detail_alignment">Participants:</td>
                                <td className="detail_alignment">49</td>
                            </tr>
                        </table>
                    </div>
                    <hr class="hr_checkout"/>

                    <div class="row co_price co_price_head">
                        <div class="col-6 leftside">
                            <p>Price</p>
                        </div>
                        <div class="col-6 rightside">
                            <p>Qty</p>
                        </div>
                    </div>

                    <div class="row co_price">
                        <div class="col-6 leftside">
                            <p>$95.00</p>
                        </div>
                        <div class="col-6 rightside">
                            <p>x49</p>
                        </div>
                    </div>

                    <hr class="hr_checkout"/>

                    <div class="row cobold">
                        <div class="col-6 leftside">
                            <p>Subtotal</p>
                        </div>
                        <div class="col-6 rightside">
                            <p>$4655.00</p>
                        </div>
                    </div>

                    <hr class="hr_checkout"/>

                    <div class="row">
                        <ul class='co_options'>
                            <li class='r1'>
                                <input type="radio" name="checkout"/><span>Pay full amount of $4, 655.00 to book</span>
                            </li>
                            <li class='r2'>
                                <input type="radio" name="checkout"/><span>Pay partial amount of $200.00*  </span>
                            </li>
                        </ul>
                    </div>

                    <hr class="hr_checkout"/>

                    <div class="row cobold">
                        <div class="col-6 leftside">
                            <p>Total</p>
                        </div>
                        <div class="col-6 rightside">
                            <p>$4655.00</p>
                        </div>
                    </div>

                    <div class="row co_tc">
                        <p>* Reserve your selected experience date</p>
                        <p>* Customise experience with an Aloha Relationship Manager</p>
                        <p>* Flexible cancellation policy</p>
                        <p>* Save 10% off final amounts if additional repeat experiences are confirmed at time of purchase</p>
                        <p>* 1% of your team’s experiences purchase will be contributed to support Planet’s conservation initiatives</p>
                    </div>
                </div>

                <div class="col-6 checkout_form">

                    <div class="checkout_form_header">
                        <div class='row'>
                            <div className="col-6">
                                <p>Pay with</p>
                            </div>
                            <div className="col-6">
                                <img class="checkout_form_header_img" src={require('../assets/visa.png')} alt="" />
                                <img class="checkout_form_header_img" src={require('../assets/mastercard.png')} alt="" />
                            </div>
                        </div>
                    </div>

                    <label for="name">Name on Card</label>
                    <input type="text" class="form-control" id="name" aria-describedby="basic-addon3" placeholder="Name on card"/>

                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" aria-describedby="basic-addon3" placeholder="Email"/>

                    <label for="card">Card Information</label>
                    <input type="text" class="form-control" id="card" aria-describedby="basic-addon3" placeholder="Card Number"/>
                    <div class="input-group carddeets2">
                        <input type="text" class="form-control" placeholder="MMYY"/>
                        <input type="text" class="form-control" placeholder="CCV"/>
                    </div>

                    <button type="button" class="btn pay_btn">Pay</button>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Checkout;