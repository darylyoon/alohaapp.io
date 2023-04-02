import React from 'react';
import MultiRangeSlider from "../components/MultiRangeSlider";
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


function BrowsePage() {

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "Experiences"))
    .then((querySnapshot) => {
      const info = querySnapshot.docs.map((doc) => [doc.id,doc.data()]);
      setData(info);
    })
  }

  useEffect(()=>{
    fetchPost();
  }, [])

  function goPdp(id) {
    navigate(`/pdp/${id}`);
  }

  function showExperience() {
    return data.map((item) => {
      return (
        <div class="card">
          <img src={require('../assets/test.png')} class="card-img-top hi" alt="..."/>
          <div class="card-title">{item[1].ExpName}</div>
          <div class="card-description">
            {item[1].Duration}<br/>
            {item[1].Price.p_Pax}/pax
            <p>{item[1].Exp_Sig}</p>
          </div>
          <button class="btn btn-primary" onClick={() => goPdp(item[0])}>View Details</button>
        </div>
      )
    }
    )
  }
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
                  {showExperience()}
              </div>
            </div>
          </div>
        </body>
    </div>
  );
}

export default BrowsePage;
