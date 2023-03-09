import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Questionnaire = () => (
  <Popup trigger={<button class="fme_button">Find My Experience</button>} position="right center" modal>
    {close => (

    // PAGE 1
    // <div className='container questionnaire'>
    //   <div className='row'>
    //     <div className='col-6'>
    //     <div class="row use_case_showcase questionnaire_usecase">
    //                 <div class="col-4">
    //                     <a class="use_case_link" href="...">
    //                         <div class="row use_case">
    //                             <img src={require('../assets/use_cases/retain_and_reengage.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
    //                             <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>RETAIN & RE-ENGAGE</h5>
    //                         </div>
    //                     </a>
    //                 </div>

    //                 <div class="col-4">
    //                 <a class="use_case_link" href="...">
    //                         <div class="row use_case">
    //                             <img src={require('../assets/use_cases/connect_and_communicate.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
    //                             <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>CONNECT & COMMUNICATE</h5>
    //                         </div>
    //                     </a>
    //                 </div>

    //                 <div class="col-4">
    //                 <a class="use_case_link" href="...">
    //                         <div class="row use_case">
    //                             <img src={require('../assets/use_cases/rebuild_and_realign.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
    //                             <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>REBULD & REALIGN</h5>
    //                         </div>
    //                     </a>
    //                 </div>

    //                 <div class="col-4">
    //                 <a class="use_case_link" href="...">
    //                         <div class="row use_case">
    //                             <img src={require('../assets/use_cases/creative_learning.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
    //                             <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>CREATIVE LEARNING</h5>
    //                         </div>
    //                     </a>
    //                 </div>

    //                 <div class="col-4">
    //                 <a class="use_case_link" href="...">
    //                         <div class="row use_case">
    //                             <img src={require('../assets/use_cases/performance_booster.png')} alt="" class='use_case_images' style={{width:120, height:100, marginTop:5}}/>
    //                             <h5 class="use_case_title" style={{marginTop:5, height:50, width:200}}>PERFORMANCE BOOSTER</h5>
    //                         </div>
    //                     </a>
    //                 </div>
    //             </div>

    //     </div>
    //     <div className='col-5 q1'>
    //       <div className='q1details'>
    //       <h4>Find your ideal experience</h4>

    //       <div className='row'>
    //         <div className='col-2'>
    //           <img src={require('../assets/1.png')} alt="" />
    //         </div>
    //         <div className='col-10'>
    //           <p>Tell us your goals</p>
    //         </div>
    //       </div>

    //       <div className='row'>
    //         <div className='col-2'>
    //           <img src={require('../assets/2.png')} alt="" />
    //         </div>
    //         <div className='col-10'>
    //           <p>Get matched with your Aloha relationship manager</p>
    //         </div>
    //       </div>

    //       <div className='row'>
    //         <div className='col-2'>
    //           <img src={require('../assets/3.png')} alt="" />
    //         </div>
    //         <div className='col-10'>
    //           <p>Manage your experience on Aloha’s platform</p>
    //         </div>
    //       </div>

    //       <button type="button" class="btn letsgo_btn" onClick={close}> Lets go</button>
    //       <p className='onlyamin'>(It only takes a minute)</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // PAGE 2
    // <div className='container questionnaire1'>
    //     <img src={require('../assets/questionnaire2.png')} alt="" className='qnimg'/>
    //     <div className='container-fluid'>
    //       <div className='row'>
    //         <div className='col-6'>
    //           <button type="button" className='qnback' onClick={close}>&#8249;</button>
    //         </div>
    //         <div className='col-6 qnclosediv'>
    //           <button type="button" className='qnclose' onClick={close}>&#xD7;</button>
    //         </div>
    //       </div>
    //       <h4>How many participants<br/>are you going to engage?</h4>
    //       <div className='row qnbuttons'>
    //         <button type="button" class="btn btn-circle btn-xl">Up to 20</button>
    //         <button type="button" class="btn btn-circle btn-xl">21 - 49</button>
    //         <button type="button" class="btn btn-circle btn-xl">50 - 99</button>
    //         <button type="button" class="btn btn-circle btn-xl">> 100</button>
    //       </div>
    //       <div className='qnbuttons'>
    //       <a href="..." className='qnnext'>Im flexible &#8250;</a>
    //       </div>
    //     </div>
    // </div>

    // PAGE 3
    // <div className='container questionnaire1'>
    //     <img src={require('../assets/questionnaire2.png')} alt="" className='qnimg'/>
    //     <div className='container-fluid'>
    //       <div className='row'>
    //         <div className='col-6'>
    //           <button type="button" className='qnback' onClick={close}>&#8249;</button>
    //         </div>
    //         <div className='col-6 qnclosediv'>
    //           <button type="button" className='qnclose' onClick={close}>&#xD7;</button>
    //         </div>
    //       </div>
    //       <h4>What is your preferred length<br/>of time for your experience?</h4>
    //       <div className='row qnbuttons'>
    //         <button type="button" class="btn btn-circle btn-xl">&#8249; 2 hours</button>
    //         <button type="button" class="btn btn-circle btn-xl">2 to 4 hours</button>
    //         <button type="button" class="btn btn-circle btn-xl">&#8250; 4 hours</button>
    //       </div>
    //       <div className='qnbuttons'>
    //       <a href="..." className='qnnext'>Im flexible &#8250;</a>
    //       </div>
    //     </div>
    // </div>

    // PAGE 4
    // <div className='container questionnaire1'>
    //     <img src={require('../assets/questionnaire3.png')} alt="" className='qnimg'/>
    //     <div className='container-fluid'>
    //       <div className='row'>
    //         <div className='col-6'>
    //           <button type="button" className='qnback' onClick={close}>&#8249;</button>
    //         </div>
    //         <div className='col-6 qnclosediv'>
    //           <button type="button" className='qnclose' onClick={close}>&#xD7;</button>
    //         </div>
    //       </div>
    //       <h4>Which planet experience<br/>excites you the most?</h4>
    //       <div className='row qnbuttons'>
    //         <button type="button" class="btn btn-circle btn-xl">Environmental Conservation</button>
    //         <button type="button" class="btn btn-circle btn-xl">Social Sector</button>
    //         <button type="button" class="btn btn-circle btn-xl">Food Sustainabliity</button>
    //       </div>
    //       <div className='qnbuttons'>
    //       <a href="..." className='qnnext'>Im flexible &#8250;</a>
    //       </div>
    //     </div>
    // </div>

    // PAGE 5
    // <div className='container questionnaire1'>
    //     <img src={require('../assets/questionnaire4.png')} alt="" className='qnimg'/>
    //     <div className='container-fluid'>
    //       <div className='row'>
    //         <div className='col-6'>
    //           <button type="button" className='qnback' onClick={close}>&#8249;</button>
    //         </div>
    //         <div className='col-6 qnclosediv'>
    //           <button type="button" className='qnclose' onClick={close}>&#xD7;</button>
    //         </div>
    //       </div>
    //       <h4>When are you planning to<br/>engage your participants?</h4>
    //       <div className='row qnbuttons'>
    //         <button type="button" class="btn btn-circle btn-xl">Q1<br/>2023</button>
    //         <button type="button" class="btn btn-circle btn-xl">Q2<br/>2023</button>
    //         <button type="button" class="btn btn-circle btn-xl">Q3<br/>2023</button>
    //         <button type="button" class="btn btn-circle btn-xl">Q4<br/>2023</button>
    //       </div>
    //       <div className='qnbuttons'>
    //       <a href="..." className='qnnext'>Im flexible &#8250;</a>
    //       </div>
    //     </div>
    // </div>

    // PAGE 6
    <div className='container questionnaire1'>
        <img src={require('../assets/questionnaire5.png')} alt="" className='qnimg'/>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6'>
              <button type="button" className='qnback' onClick={close}>&#8249;</button>
            </div>
            <div className='col-6 qnclosediv'>
              <button type="button" className='qnclose' onClick={close}>&#xD7;</button>
            </div>
          </div>
          <h4>What is your budget?<br/>(per participant)</h4>
          <div className='row qnbuttons'>
            <button type="button" class="btn btn-circle btn-xl">&#8249; $80</button>
            <button type="button" class="btn btn-circle btn-xl">$81 - $150</button>
            <button type="button" class="btn btn-circle btn-xl">&#8250; $150</button>
          </div>
          <div className='qnbuttons'>
          <a href="..." className='qnnext'>Im flexible &#8250;</a>
          </div>
        </div>
    </div>
    )}
  </Popup>
);

export default Questionnaire;