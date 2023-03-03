import React from 'react';
import MultiRangeSlider from "../components/MultiRangeSlider";

function BrowsePage() {
  return (
    <div>
        <head>
          <title>Browsing Page</title>
        </head>
        <body>
          <div class="container">
            <div class="left-column">
            <nav class='filterby'>
              <div>
              <div class='filtertop'>
                <p class='inline'>Filter By</p>
                <p class='inline scnd'>Clear All</p>
              </div>  
              <label for="touch"><span class='filter_title'>Categories</span></label>
              <hr/>     
              <input type="checkbox" id="touch"/> 

              <ul class="slide">
                <li><input type='checkbox'/><span>Environmental Conservation</span></li> 
                <li><input type='checkbox'/><span>Social Sector</span></li> 
                <li><input type='checkbox'/><span>Food Sustainability</span></li> 
              </ul>

              <label for="touch1"><span class='filter_title'>Participants</span></label>   
              <hr/>            
              <input type="checkbox" id="touch1"/> 

              <ul class="slide">
              <li><input type='radio'/><span>Up to 20</span></li> 
                <li><input type='radio'/><span>21 to 50</span></li> 
                <li><input type='radio'/><span>50 to 100</span></li>
                <li><input type='radio'/><span>More than 100</span></li> 
              </ul>

              <label for="touch2"><span class='filter_title'>Budget</span></label>  
              <hr/>                  
              <input type="checkbox" id="touch2"/> 

              <ul class="slide">
                <li><MultiRangeSlider
                    min={0}
                    max={500}
                    onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                  /></li> 
              </ul>


              <label for="touch3"><span class='filter_title'>Date</span></label>    
              <hr/>                
              <input type="checkbox" id="touch3"/> 

              <ul class="slide">
                <li>
                  <div class='row dates'>
                    <div class='col-6'>
                      <p>Start Date:</p><input type="date"/>
                      </div>
                      <div class='col-6'>
                      <p>End Date:</p><input type="date"/>
                      </div>
                  </div>
                  </li> 
              </ul>
              </div>

            </nav> 
            </div>
            <div class="right-column">
              <div class='found_header'>
                <h4>12 Activities Found</h4>
              </div>
              <div class='cards'>
                <div class="card">
                  <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
                  <div class="card-title">Activity 1</div>
                  <div class="card-description">
                    14 Oct 2023 - 17 Oct 2023<br/>
                    $50/pax
                    <p>This will be the description of the activity in detail, a brief summary on its purpose and target audience and goals.</p>
                  </div>
                </div>
                <div class="card">
                  <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
                  <div class="card-title">Activity 2</div>
                  <div class="card-description">
                    14 Oct 2023 - 17 Oct 2023<br/>
                    $50/pax
                    <p>This will be the description of the activity in detail, a brief summary on its purpose and target audience and goals.</p>
                  </div>
                </div>
                <div class="card">
                  <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
                  <div class="card-title">Activity 3</div>
                  <div class="card-description">
                    14 Oct 2023 - 17 Oct 2023<br/>
                    $50/pax
                    <p>This will be the description of the activity in detail, a brief summary on its purpose and target audience and goals.</p>
                  </div>
                </div>

                <div class="card">
                  <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
                  <div class="card-title">Activity 1</div>
                  <div class="card-description">
                    14 Oct 2023 - 17 Oct 2023<br/>
                    $50/pax
                    <p>This will be the description of the activity in detail, a brief summary on its purpose and target audience and goals.</p>
                  </div>
                </div>
                <div class="card">
                  <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
                  <div class="card-title">Activity 2</div>
                  <div class="card-description">
                    14 Oct 2023 - 17 Oct 2023<br/>
                    $50/pax
                    <p>This will be the description of the activity in detail, a brief summary on its purpose and target audience and goals.</p>
                  </div>
                </div>
                <div class="card">
                  <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
                  <div class="card-title">Activity 3</div>
                  <div class="card-description">
                    14 Oct 2023 - 17 Oct 2023<br/>
                    $50/pax
                    <p>This will be the description of the activity in detail, a brief summary on its purpose and target audience and goals.</p>
                  </div>
                </div>

                <div class="card">
                  <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
                  <div class="card-title">Activity 1</div>
                  <div class="card-description">
                    14 Oct 2023 - 17 Oct 2023<br/>
                    $50/pax
                    <p>This will be the description of the activity in detail, a brief summary on its purpose and target audience and goals.</p>
                  </div>
                </div>
                <div class="card">
                  <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
                  <div class="card-title">Activity 2</div>
                  <div class="card-description">
                    14 Oct 2023 - 17 Oct 2023<br/>
                    $50/pax
                    <p>This will be the description of the activity in detail, a brief summary on its purpose and target audience and goals.</p>
                  </div>
                </div>
                <div class="card">
                  <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
                  <div class="card-title">Activity 3</div>
                  <div class="card-description">
                    14 Oct 2023 - 17 Oct 2023<br/>
                    $50/pax
                    <p>This will be the description of the activity in detail, a brief summary on its purpose and target audience and goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
    </div>
  );
}

export default BrowsePage;
