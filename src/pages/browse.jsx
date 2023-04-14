import React, {useState, useEffect} from 'react';
import MultiRangeSlider from "../components/MultiRangeSlider";
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase';
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

  console.log(data);

  function goPdp(id) {
    navigate(`/pdp/${id}`);
  }

  // function to cut string if more than 100 words and add '...'
  function limitWords (str) {
    var words = str.split(' ');
    if (words.length > 50) {
      return words.slice(0, 50).join(' ') + '...';
    } else {
      return str;
    }
  }

  const showExperience = () => {
    return data.map((item) => {
      if (id_list.includes(item[0])) {
        return (
          <a onClick={() => goPdp(item[0])} className='col-4'>
          <div class="card">
            <img src={item[1].Images[0]} class="card-img-top hi" alt="..."/>
            <div class="card-title">{item[1].ExpName}</div>
            <div class="card-description">
              {item[1].Duration} hours<br/>
              ${item[1].Price.p_Pax} / pax
              <p>{limitWords(item[1].Exp_Sig)}</p>
            </div>
          </div>
          </a>
        )
      }
    })
  }

  //function to convert '$300' to 300
  function convertToNum (str) {
    return parseInt(str.replace(/[^0-9]/g, ''));
  }

  //function to compare dates date 1 'yyyy-mm-dd' and date 2 'dd/mm/yy'
  function compareDates (date1, date2) {
    // cchange date 2 format to 'yyyy-mm-dd'
    if (d1 > d2) {
      return true;
    } else {
      return false;
    }
  }

  const [fcategories, setCategories] = useState([]);
  const [fparticipants, setParticipants] = useState('');
  const [fbudget, setBudget] = useState([]);
  const [fSdate, setSDate] = useState('');
  const [fEdate, setEDate] = useState('');

  if (data[0] !== undefined) {

    // check if the checkbox is checked or not
    const check = (e) => {
      if (e.target.checked) {
        // push calue into setCategories
        setCategories([...fcategories, e.target.value]);
      } else {
        // remove value from setCategories
        setCategories(fcategories.filter((item) => item !== e.target.value));
      }
    }

    const checkpax = (e) => {
      if (e.target.checked) {
        // push calue into setCategories
        setParticipants(e.target.value);
      }
    }

    function loadcheck (e)  {
      if (fcategories.includes(e.target.value)) {
        e.target.checked = true;
      }
    }

    function checkstartdate (e) {
        setSDate(e.target.value);
    }

    function checkenddate (e) {
        setEDate(e.target.value);
    }

    function clearAll (e) {
      setCategories([]);
      setParticipants('');
      setBudget([]);
      setSDate('');
      setEDate('');
      // unselect all checkboxes
      var checkboxes = document.querySelectorAll('input[type=checkbox]');
      for (var checkbox of checkboxes) {
        checkbox.checked = false;
      }
      // unselect all radio buttons
      var radios = document.querySelectorAll('input[type=radio]');
      for (var radio of radios) {
        radio.checked = false;
      }
    }

    var id_list = [];
    data.map((each, index) => {
        return id_list.push(each[0]);
    })

     // FILTERING
      data.map((item, index) => {
      if (fcategories.length !== 0) {
        for (var each of item[1].Exp_Pillar) {
          var count = 0;
          if (fcategories.includes(each) === false) {
            count += 1
          }
        }
        if (count === item[1].Exp_Pillar.length) {
          var temp = id_list.indexOf(item[0]);
          id_list.splice(temp, 1);
        }
      }

      if (fparticipants !== null) {
        if (fparticipants > item[1].Max_Part) {
          var temp = id_list.indexOf(item[0]);
          id_list.splice(temp, 1);
        }
      }

      console.log(fSdate, fEdate);

      // check start and end date
      if (fSdate !== '') {
        if (compareDates(fSdate, item[1].Timeslot_Day.startDate)===false) {
          var temp = id_list.indexOf(item[0]);
          id_list.splice(temp, 1);
        }
      }

      if (fEdate !== '') {
        if (compareDates(fEdate,item[1].Timeslot_Day.endDate)===true) {
          var temp = id_list.indexOf(item[0]);
          id_list.splice(temp, 1);
        }
      }

    })

    return (
      <div>
          <head>
            <title>Browsing Page</title>
          </head>
          <body>
            <div class="container">
              <div class="col-sm-3 left-column">
              <nav class='filterby'>
                <div>
                <div class='filtertop'>
                  <p class='inline'>Filter By</p>
                  <p class='inline scnd'><button className='clearallbtn' onClick={clearAll}>Clear All</button></p>
                </div>  
                <label for="touch"><span class='filter_title'>Categories</span></label>
                <hr/>     
                <input type="checkbox" id="touch"/> 

                <ul class="slide">
                  <li><input type='checkbox' id='E' value={'E'} onLoad={loadcheck} onChange={check} /><span>Environmental Conservation</span></li> 
                  <li><input type='checkbox' id='S' value={'S'} onLoad={loadcheck} onChange={check}/><span>Social Sector</span></li> 
                  <li><input type='checkbox' id='F' value={'F'} onLoad={loadcheck} onChange={check}/><span>Food Sustainability</span></li> 
                </ul>

                <label for="touch1"><span class='filter_title'>Participants</span></label>   
                <hr/>            
                <input type="checkbox" id="touch1"/> 

                <ul class="slide">
                <li><input type='radio' name='paxselect' value={20} onChange={checkpax}/><span>Up to 20</span></li> 
                  <li><input type='radio' name='paxselect' value={50} onChange={checkpax}/><span>21 to 50</span></li> 
                  <li><input type='radio' name='paxselect' value={100} onChange={checkpax}/><span>50 to 100</span></li>
                  <li><input type='radio' name='paxselect' value={200} onChange={checkpax}/><span>More than 100</span></li> 
                </ul>

                <label for="touch2"><span class='filter_title'>Budget</span></label>  
                <hr/>                  
                <input type="checkbox" id="touch2"/> 

                <ul class="slide">
                  <li><MultiRangeSlider
                      min={0}
                      max={500}
                      onChange={(min, max) => {console.log(min, max)}}
                    /></li> 
                </ul>


                <label for="touch3"><span class='filter_title'>Date</span></label>    
                <hr/>                
                <input type="checkbox" id="touch3"/> 

                <ul class="slide">
                  <li>
                    <div class='row dates'>
                      <div class='col-6'>
                        <p>Start Date:</p><input type="date" onChange={checkstartdate}/>
                        </div>
                        <div class='col-6'>
                        <p>End Date:</p><input type="date" onChange={checkenddate}/>
                        </div>
                    </div>
                    </li> 
                </ul>
                </div>

              </nav> 
              </div>
              <div class="col-sm-9 right-column">
                <div class='found_header'>
                  <h4>{id_list.length} Activities Found</h4>
                </div>
                <div class='cards'>
                    {showExperience(id_list)}
                </div>
              </div>
            </div>
          </body>
      </div>
    );
}
}

export default BrowsePage;
