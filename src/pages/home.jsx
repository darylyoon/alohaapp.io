import React from "react";

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
                    <button class="fme_button">Find My Experience</button>
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

                <div class="row use_case_showcase" style={{marginTop:10}}>
                    <div class="col-2">
                        <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <h5 class="use_case_title" style={{marginTop:20, height:50, width:200}}>RETAIN & RE-ENGAGE</h5>
                                <img src={require('../assets/use_cases/retain_and_reengage.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-2">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <h5 class="use_case_title" style={{marginTop:20, height:50, width:200}}>CONNECT & COMMUNICATE</h5>
                                <img src={require('../assets/use_cases/connect_and_communicate.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-2">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <h5 class="use_case_title" style={{marginTop:20, height:50, width:200}}>REBULD & REALIGN</h5>
                                <img src={require('../assets/use_cases/rebuild_and_realign.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-2">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <h5 class="use_case_title" style={{marginTop:20, height:50, width:200}}>CREATIVE LEARNING</h5>
                                <img src={require('../assets/use_cases/creative_learning.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>

                    <div class="col-2">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <h5 class="use_case_title" style={{marginTop:20, height:50, width:200}}>PERFORMANCE BOOSTER</h5>
                                <img src={require('../assets/use_cases/performance_booster.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <p class="use_case_description" style={{marginTop:5}}>This is a short description of what this category means</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Customer Journey */}
            <div>
                <div>
                    <h2 style={{marginTop:100, textAlign:"center"}}>Customer Journey</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;