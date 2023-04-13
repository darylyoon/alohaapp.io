import React from "react";

function Dashboard() {
    return (
        <div class="dashboard">
            <img src={require("../assets/rws.jpeg")} alt="dashboard" className="bgimg"/>
            <div className="dbtop">
                <h4>Aloha, Natasha</h4>
                <h6>RWS Singapore, Master Admin</h6>
            </div>
            <div className="dbbottom">
            <div className="row">
                <div className="col-2">
                    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                        <div class="position-sticky">
                        <div class="list-group list-group-flush">
                            <a href="#" class="list-group-item list-group-item-action py-3 ripple" aria-current="true">
                            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-3 ripple">
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Experiences</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-3 ripple"><i
                                class="fas fa-lock fa-fw me-3"></i><span>SDG Impact</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-3 ripple"><i
                                class="fas fa-chart-line fa-fw me-3"></i><span>Products</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-3 ripple">
                            <i class="fas fa-chart-pie fa-fw me-3"></i><span>Campaigns</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-3 ripple"><i
                                class="fas fa-chart-bar fa-fw me-3"></i><span>Participants</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-3 ripple"><i
                                class="fas fa-globe fa-fw me-3"></i><span>Settings</span></a>
                            <a href="#" class="list-group-item list-group-item-action py-3 ripple"><i
                                class="fas fa-building fa-fw me-3"></i><span>Support</span></a>
                        </div>
                        </div>
                    </nav>
                </div>
                <div className="col-10">
                    <div className="row cardsrow firstrow">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Upcoming Experiences</h5>
                                    <p className="card-text">14</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Experiences Participants</h5>
                                    <p className="card-text">500<span className="card-text-smaller"> (81%)</span></p>
                                    <p className="card-text-smaller">&darr; 4.5% Engagement Score</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title okok">Top 3 SDG Accomplished</h5><span className="card-text-smaller"> (Click for more)</span>
                                    <div className="row dbimgrow">
                                        <div className="col-3">
                                            <img src={require("../assets/SDGs/SDG1.png")} alt="sdg1" className="dbimg"/>
                                        </div>
                                        <div className="col-3">
                                            <img src={require("../assets/SDGs/SDG1.png")} alt="sdg1" className="dbimg"/>
                                        </div>
                                        <div className="col-3">
                                            <img src={require("../assets/SDGs/SDG1.png")} alt="sdg1" className="dbimg"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row cardsrow secondrow">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-1">
                                            <h5 className="card-title">S/n</h5>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="card-title">Experience Title</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-title">Date</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-title">Location</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-1">
                                            <h5 className="card-text">1</h5>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="card-text">Lunch & Learn</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-text">01 May 2023</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-text">Office</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-1">
                                            <h5 className="card-text">2</h5>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="card-text">Garden to Goblet</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-text">20 May 2023</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-text">Off-site</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-1">
                                            <h5 className="card-text">3</h5>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="card-text">Onsite Intro to Plastic Upcycling</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-text">01 June 2023</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-text">Off-site</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-1">
                                            <h5 className="card-text">4</h5>
                                        </div>
                                        <div className="col-7">
                                            <h5 className="card-text">Beach Clean-up</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-text">31 June 2023</h5>
                                        </div>
                                        <div className="col-2">
                                            <h5 className="card-text">Off-site</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row cardsrow thirdrow">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">E (Environment Conservation)</h5>
                                    <p className="card-text">200<span className="card-text-smaller"> (91%)</span></p>
                                    <p className="card-text-smaller">&darr; 48% Engagement Score</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">S (Social Sector)</h5>
                                    <p className="card-text">50<span className="card-text-smaller"> (71%)</span></p>
                                    <p className="card-text-smaller">&darr; 11% Engagement Score</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">F (Food Sustainability)</h5>
                                    <p className="card-text">250<span className="card-text-smaller"> (95%)</span></p>
                                    <p className="card-text-smaller">&darr; 45% Engagement Score</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
}

export default Dashboard;