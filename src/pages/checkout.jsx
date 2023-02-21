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
                <div class="col-5 checkout_details">
                    <div class="checkout_details_header">
                        Your Experience
                    </div>

                    <hr class="hr_checkout"/>

                    <div class="checkout_details_text">
                        Details
                    </div>

                    <div class="row">
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

                    <div class="checkout_price_text">
                        Price
                    </div>

                    <div class="row">
                        <table class="price_table w-auto">
                            <tr>
                                <td className="price_amount">$95.00</td>
                                <td class="participant_count">x49</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Checkout;