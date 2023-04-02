import React from 'react';
import Carouselcomp from '../components/carousel';
import { Link , useParams} from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Pdp() {
    const id = useParams(); 
    
    const [data, setData] = useState([]);

    const [partner, setPartner] = useState([]);

    useEffect(() => {
        const all = async () => {
            await getDocs(collection(db, "Experiences"))
            .then((querySnapshot) => {
            const info = querySnapshot.docs.map((doc) => [doc.id,doc.data()]);
            for (let i = 0; i < info.length; i++) {
                if (info[i][0] === id.exp_id) {
                    setData(info[i]);
                }
            }
            })
        }
        all();
    }, []);

    useEffect(() => {
        const all = async () => {
            await getDocs(collection(db, "Exp_Partner"))
            .then((querySnapshot) => {
            const info = querySnapshot.docs.map((doc) => [doc.id,doc.data()]);
            setPartner(info);
        }
        )
        }
        all();
    }, []);

    if (data.length !== 0 && partner.length !== 0) {

        // loop through partner array to find the partner name
        for (let i = 0; i < partner.length; i++) {
            if (partner[i][0] === data[1].Partner_ID) {
                setPartner(partner[i]);
            }
        }
        return (
            <div class='pdp'>
                {/* product details page */}
                <div class="container-fluid">
                    <div class='pdp_c'>
                        <img src={require('../assets/Emblem-WWF.jpeg')} alt="..." class='pdp_client_logo'/>
                        <h6 class='pdp_client'>{partner[1].CName}</h6>
                    </div>
                    <h2 class='pdp_title'>{data[1].ExpName}</h2>
                    <div class="row">
                        <div class="col-8">
                            <Carouselcomp></Carouselcomp>
                        </div>
                        <div class="col-4">
                            <div class="pricing">
        
                                <div class="pricing_first">
                                    <div class="row">
                                        <div class="col-6">
                                            <p>From</p>
                                        </div>
                                        <div class="col-6">
                                            <p class='ppp_head'><span class='ppp_big'>$95.00</span><span class='per'> / person</span></p>
                                        </div>
                                    </div>
                                    {/* <div class="row">
                                        <div class="col-6">
                                            <button>Dates</button>
                                        </div>
                                        <div class="col-6">
                                            <button>Participants</button>
                                        </div>
                                    </div> */}
                                </div>
        
                                <div class="pricing_second">
                                    {/* list of dates */}
                                    <div class="pricing_date">
                                        {/* unordered list of dates */}
                                        <ul>
                                            <li>
                                                <div class='row'>
                                                    <div class='col-6'>
                                                        <p>Mon, 20 Feb</p>
                                                        <p>9:00am - 12:00pm</p>
                                                        <p>43 Slots Left</p>
                                                    </div>
                                                    <div class='col-6 ppp_btn'>
                                                        <div class='row'>
                                                            <div class='col-12'>
                                                            <p><span class='ppp'>$95.00</span> / person</p>
                                                            </div>
                                                            <div class='col-12'>
                                                            <button type='button' class='btn'>Choose</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </li>
                                            <li>
                                                <div class='row'>
                                                    <div class='col-6'>
                                                        <p>Mon, 20 Feb</p>
                                                        <p>9:00am - 12:00pm</p>
                                                        <p>43 Slots Left</p>
                                                    </div>
                                                    <div class='col-6 ppp_btn'>
                                                        <div class='row'>
                                                            <div class='col-12'>
                                                            <p><span class='ppp'>$95.00</span> / person</p>
                                                            </div>
                                                            <div class='col-12'>
                                                            <button type='button' class='btn'>Choose</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </li>
                                            <li>
                                                <div class='row'>
                                                    <div class='col-6'>
                                                        <p>Mon, 20 Feb</p>
                                                        <p>9:00am - 12:00pm</p>
                                                        <p>43 Slots Left</p>
                                                    </div>
                                                    <div class='col-6 ppp_btn'>
                                                        <div class='row'>
                                                            <div class='col-12'>
                                                            <p><span class='ppp'>$95.00</span> / person</p>
                                                            </div>
                                                            <div class='col-12'>
                                                            <button type='button' class='btn'>Choose</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
        
                                <div class="pricing_third">
                                    <div class="row">
                                        <div class="col-12">
                                            <button type="button" class="btn btn-light">Show more availabilities</button>
                                        </div>
                                        <div class="col-12">
                                            <button type="button" class="btn btn-dark">Request availabilities</button>
                                        </div>
                                    </div>
                                </div>      
        
                            </div>
                        </div>
                    </div>
        
                    <div class="container">
                        
                    </div>
        
                </div>
        
                {/* description */}
                <div class="container-fluid">
                    <h6 class='pdp_who'>Who are we?</h6>
                    <p class='pdp_who_details'> In Singapore, about 700 million kg of plastic waste is discarded every year. However, less than 10% of plastics are being recycled. Our excessive use of plastics, which has since increased due to the Covid-19 pandemic, is impacting ocean health and biodiversity. By 2050, there could be more plastics in the ocean than fish by weight! <br/>
                        Through this experience, participants will be able to: <br/>
                        - Learn from WWF-Singapore's experts on how businesses can transform how we use plastic and how individuals can play a part too. <br/>
                        - Lunch and learn, over a plant-based meal experience <br/>
                        - Hands-on create a pair of coasters / a pair of carabiners to take-away as reminder to up-cycle in efforts to be mindful about climate change (top-up experience) </p>
                </div>
        
                <div class="container-fluid">
                    <h6 class='pdp_who'>Sustainability</h6>
                    <div class='sus_img'>
                        <img src={require('../assets/sus.png')} alt="..."/>
                        <img src={require('../assets/sus.png')} alt="..."/>
                        <img src={require('../assets/sus.png')} alt="..."/>
                        <img src={require('../assets/sus.png')} alt="..."/>
                        <img src={require('../assets/sus.png')} alt="..."/>
                    </div>
                </div>
            </div>
            );
    }
}

export default Pdp;