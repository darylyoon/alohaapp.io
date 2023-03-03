import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Questionnaire = () => (
  <Popup trigger={<button class="fme_button">Find My Experience</button>} position="right center" modal>
    {close => (
    <div className='container questionnaire'>
      <div className='row'>
        <div className='col-6'>
        <div class="row use_case_showcase questionnaire_usecase">
                    <div class="col-4">
                        <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <img src={require('../assets/use_cases/retain_and_reengage.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>RETAIN & RE-ENGAGE</h5>
                            </div>
                        </a>
                    </div>

                    <div class="col-4">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <img src={require('../assets/use_cases/connect_and_communicate.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>CONNECT & COMMUNICATE</h5>
                            </div>
                        </a>
                    </div>

                    <div class="col-4">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <img src={require('../assets/use_cases/rebuild_and_realign.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>REBULD & REALIGN</h5>
                            </div>
                        </a>
                    </div>

                    <div class="col-4">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <img src={require('../assets/use_cases/creative_learning.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>CREATIVE LEARNING</h5>
                            </div>
                        </a>
                    </div>

                    <div class="col-4">
                    <a class="use_case_link" href="...">
                            <div class="row use_case">
                                <img src={require('../assets/use_cases/performance_booster.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
                                <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>PERFORMANCE BOOSTER</h5>
                            </div>
                        </a>
                    </div>
                </div>

        </div>
        <div className='col-5 q1'>
          <div className='q1details'>
          <h4>Find your ideal experience</h4>

          <div className='row'>
            <div className='col-2'>
              <img src={require('../assets/1.png')} alt="" />
            </div>
            <div className='col-10'>
              <p>Tell us your goals</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-2'>
              <img src={require('../assets/2.png')} alt="" />
            </div>
            <div className='col-10'>
              <p>Get matched with your Aloha relationship manager</p>
            </div>
          </div>

          <div className='row'>
            <div className='col-2'>
              <img src={require('../assets/3.png')} alt="" />
            </div>
            <div className='col-10'>
              <p>Manage your experience on Aloha’s platform</p>
            </div>
          </div>

          <button type="button" class="btn letsgo_btn" onClick={close}> Lets go</button>
          <p className='onlyamin'>(It only takes a minute)</p>
          </div>
        </div>
      </div>
    </div>
    )}
  </Popup>
);

export default Questionnaire;