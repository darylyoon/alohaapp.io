import React from "react";
import { Blob } from 'react-interactive-blob'
import Questionnaire from "../components/questionnaire";

function Home() {
    return (
        <div class="home">
            {/* Cover image + Find My Experience */}
            <div class="home_image">
                <img src={require('../assets/plastic_waste.jpg')} alt="..." class='home_client_logo w-100' style={{height:600}}/>

                <div class="home_text">
                    Engaging experiences driving change
                </div>

                <div class="home_fme">
                    <Questionnaire/>
                </div>
            </div>

            {/* Experience Partners */}
            <div class="container-fluid">
                <div class="partner_text">
                    <h2>Experience Partners</h2>
                </div>

                <div class="row partner_showcase" style={{marginTop:10}}>
                    <div class="col-2">
                        <img src={require('../assets/experience_partners/Emblem-WWF.jpeg')} alt="..." class='home_partner_logo'/>
                        <h6 class='home_partner_text'>WWF</h6>
                    </div>

                    <div class="col-2">
                        <img src={require('../assets/experience_partners/ipseipsaipsum.jpg')} alt="..." class='home_partner_logo'/>
                    </div>

                    <div class="col-2">
                        <img src={require('../assets/experience_partners/the_plastic_project.jpg')} alt="..." class='home_partner_logo'/>
                    </div>

                    <div class="col-2">
                        <img src={require('../assets/experience_partners/stridy.jpg')} alt="..." class='home_partner_logo'/>
                    </div>

                    <div class="col-2">
                        <img src={require('../assets/experience_partners/singapore_tourism_board.jpg')} alt="..." class='home_partner_logo'/>
                    </div>
                </div>
            </div>

            {/* Use Cases */}
            <div class="container-fluid">
                <div class="use_case_text">
                    <h2>Impacts Your Team Can Make</h2>
                </div>

                <div class="row use_case_showcase">
                    <div class="col-2">
                        <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <img src={require('../assets/use_cases/retain_and_reengage.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>RETAIN & RE-ENGAGE</h5>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-2">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">

                                <img src={require('../assets/use_cases/connect_and_communicate.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>CONNECT & COMMUNICATE</h5>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-2">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <img src={require('../assets/use_cases/rebuild_and_realign.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>REBULD & REALIGN</h5>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-2">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <img src={require('../assets/use_cases/creative_learning.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>CREATIVE LEARNING</h5>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-2">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">

                                <img src={require('../assets/use_cases/performance_booster.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>PERFORMANCE BOOSTER</h5>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Customer Journey */}
            <div>
                <div class='customer_journey'>
                    <h2 style={{marginTop:150, textAlign:"center"}}>Customer Journey</h2>
                    <div class='container'>
                        <img src={require('../assets/customer_journey.png')} alt="" class='customer_journey_image'/>
                        {/* <Blob height={500} radius={100} color='#FD7133' markers='true' sensitivity='0.3'/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;