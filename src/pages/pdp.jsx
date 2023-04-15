import React from "react";
import Carouselcomp from "../components/carousel";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pdp() {
  const id = useParams();

  const [data, setData] = useState([]);

  const [partner, setPartner] = useState([]);

  const [availability, setAvailability] = useState([]);
  console.log(availability[1])

  const [numPax, setNumPax] = useState(0);

  const navigate = useNavigate();

  console.log(data, partner, availability);

  useEffect(() => {
    const all = async () => {
      await getDocs(collection(db, "Experiences")).then((querySnapshot) => {
        const info = querySnapshot.docs.map((doc) => [doc.id, doc.data()]);
        for (let i = 0; i < info.length; i++) {
          if (info[i][0] === id.exp_id) {
            setData(info[i]);
          }
        }
      });
    };
    all();
  }, []);

  useEffect(() => {
    const all = async () => {
      await getDocs(collection(db, "Exp_Partner")).then((querySnapshot) => {
        const info = querySnapshot.docs.map((doc) => [doc.id, doc.data()]);
        setPartner(info);
      });
    };
    all();
  }, []);

  useEffect(() => {
    const all = async () => {
      await getDocs(collection(db, "Availability")).then((querySnapshot) => {
        const info = querySnapshot.docs.map((doc) => [doc.id, doc.data()]);
        for (let i = 0; i < info.length; i++) {
          if (info[i][0] === id.exp_id) {
            setAvailability(info[i]);
          }
        }
      });
    };
    all();
  }, []);

  function learningOutcomes(array) {
    return array.map((item) => {
      return <li class="learning_outcomes">{item}</li>;
    });
  }

  function susImg(object) {
    // loop through object
    return Object.keys(object).map((SDGIndex) => {
      console.log(object[SDGIndex].SDG_No);
      return (
        <img
          src={require(`../assets/SDGs/SDG${object[SDGIndex].SDG_No}.png`)}
          alt="..."
          class="pdp_sus_img"
        />
      );
    });
  }

  function goCheckout(data, partner, date, time) {
    console.log(availability);
    navigate(`/checkout`, {
      state: { data: data, partner: partner, date: date, time: time, numPax: numPax },
    });
  }

  function convertDate(date) {
    let splitDate = date.split("/");
    let newDate = new Date(String(parseInt(splitDate[2])+2000), splitDate[1] - 1, splitDate[0]);
    return newDate;
  }

  function convertDuration(time, duration) {
    let durationMin = duration * 60;
    let hours = Math.floor(durationMin / 60);
    let minutes = durationMin % 60;
    let endHour = parseInt(time[0] + time[1]) + hours;
    let endMinutes = parseInt(time[2] + time[3]) + minutes;
    if (endMinutes >= 60) {
      endHour += 1;
      endMinutes -= 60;
    }
    if (endMinutes < 10) {
      endMinutes = "0" + endMinutes;
    }
    if (endHour < 10) {
      endHour = "0" + endHour;
    }
    // convert to 12 hour time and add am/pm
    let startHour = parseInt(time[0] + time[1]);
    let startMinutes = parseInt(time[2] + time[3]);
    let startAmPm = null;
    let endAmPm = null;
    if (startHour > 12) {
      startHour -= 12;
      startAmPm = "pm";
    } else {
      startAmPm = "am";
    }
    if (startHour < 10) {
      startHour = "0" + startHour;
    }
    if (startMinutes < 10) {
      startMinutes = "0" + startMinutes;
    }
    if (endHour > 12) {
      endHour -= 12;
      endAmPm = "pm";
    } else {
      endAmPm = "am";
    }

    let startTime = startHour + ":" + startMinutes + startAmPm;
    let endTime = endHour + ":" + endMinutes + endAmPm;

    return startTime + " - " + endTime;
  }

  function convert24h(time, duration) {
    // add duration to time in 24h format
    let durationMin = duration * 60;
    let hours = Math.floor(durationMin / 60);
    let minutes = durationMin % 60;
    let endHour = parseInt(time[0] + time[1]) + hours;
    let endMinutes = parseInt(time[2] + time[3]) + minutes;
    if (endMinutes >= 60) {
      endHour += 1;
      endMinutes -= 60;
    }
    if (endMinutes < 10) {
      endMinutes = "0" + endMinutes;
    }
    if (endHour < 10) {
      endHour = "0" + endHour;
    }
    return time + " - " + endHour + endMinutes;
  }
  function sortDates() {
    // sort dates in ascending order
    let dates = Object.keys(availability[1]);
    let returnans = {};
    for(var i = 0; i < dates.length; i++) {
      var clean = dates[i].split("/");
      returnans[clean[2] + clean[1] + clean[0]] = dates[i];
    }
    let final = Object.keys(returnans).sort();
    console.log(Object.values(final));
    console.log(returnans)
    return Object.values(returnans);
  }
  function showTimeSlots() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // map the availability object
    // return Object.keys(availability[1]).sort().map((date) => {
    return sortDates().map((date) => {
      // convert date to date object
      console.log(date);
      let newDate = convertDate(date);
      console.log(newDate);
      // if timeslot in date is true, console log the date and time
      return Object.keys(availability[1][date]).map((time) => {
        let oldTime = convert24h(time, data[1].Duration);
        let newTime = convertDuration(time, data[1].Duration);
        if (availability[1][date][time] === true) {
          return (
            <li>
              <div class="row">
                <div class="col-6">
                  <p>
                    {days[newDate.getDay()] +
                      ", " +
                      newDate.getDate() +
                      " " +
                      months[newDate.getMonth()]}
                  </p>
                  <p>{newTime}</p>
                </div>
                <div class="col-6 ppp_btn">
                  <div class="row">
                    <div class="col-12">
                      <p>
                        <span class="ppp">${data[1].Price.p_Pax}</span> / person
                      </p>
                    </div>
                    <div class="col-12">
                      <button
                        type="button"
                        class="btn"
                        onClick={() =>
                          goCheckout(data, partner, newDate, oldTime)
                        }
                      >
                        Choose
                      </button>
                    </div>
                  </div>
                </div>
                  <hr class="pdp_hr"/>
              </div>
            </li>
          );
        }
      });
    });
  }

  if (data.length !== 0 && partner.length !== 0) {
    // loop through partner array to find the partner name
    for (let i = 0; i < partner.length; i++) {
      if (partner[i][0] === data[1].Partner_ID) {
        setPartner(partner[i]);
      }
    }
    return (
      <div class="pdp">
        {/* product details page */}
        <div class="container-fluid">
          <div class="pdp_c">
            <img src={partner[1].Logo} alt="..." class="pdp_client_logo" />
            <h6 class="pdp_client">{partner[1].CName}</h6>
          </div>
          <h2 class="pdp_title">{data[1].ExpName}</h2>
          <div class="row">
            <div class="col-8">
              <Carouselcomp
                img1={data[1].Images[1]}
                img2={data[1].Images[2]}
                img3={data[1].Images[3]}
              />
            </div>
            <div class="col-4">
              <div class="pricing">
                <div class="pricing_first">
                  <div class="row">
                    <div class="col-6">
                      <p>From</p>
                    </div>
                    <div class="col-6">
                      <p class="ppp_head">
                        <span class="ppp_big">${data[1].Price.p_Pax}</span>
                        <span class="per"> / person</span>
                      </p>
                    </div> 
                    <input type='number' min='1' max='1000' value={numPax} onChange={e => setNumPax(e.target.value)} placeholder='Number of pax'/>
                    <hr class="pdp_timeslot_hr"/>
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
                    <ul>{showTimeSlots()}</ul>
                  </div>
                </div>

                {/* <div class="pricing_third">
                  <div class="row">
                    <div class="col-12">
                      <button type="button" class="btn btn-light">
                        Show more availabilities
                      </button>
                    </div>
                    <div class="col-12">
                      <button type="button" class="btn btn-dark">
                        Request availabilities
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div class="container"></div>
        </div>

        {/* description */}
        <div class="container-fluid">
          <h3 class="pdp_who">Who are we?</h3>
          <p class="pdp_who_details">
            {" "}
            {data[1].Exp_Sig} <br />
            <br />
            <b>Through this experience, participants will be able to:</b> <br />
            <ul>{learningOutcomes(data[1].Learning_Outcomes)}</ul>
          </p>
        </div>

        <div class="container-fluid">
          <h3 class="pdp_who">Sustainability</h3>
          <div class="sus_img">{susImg(data[1].SDG)}</div>
        </div>
      </div>
    );
  }
}

export default Pdp;
