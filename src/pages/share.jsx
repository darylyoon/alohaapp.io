import React from "react";
import "add-to-calendar-button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { RWebShare } from "react-web-share";
// import { useLocation } from "react-router-dom";

function Share() {
  // const location = useLocation();
  // console.log(location.state);
  // const alohaURI = process.env.REACT_APP_PROD_ENV_URI;
  const alohaURI = process.env.REACT_APP_TEST_ENV_URI;
  const { booking_id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isDataEdited, setIsDataEdited] = useState(false);
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const getBooking = async () => {
      setLoading(true);
      const docRef = doc(db, "Booking", `B${booking_id}`);
      const docSnap = await getDoc(docRef);
      if (!isSubscribed) {
        setLoading(false);
        return;
      }
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData(docSnap.data());
        setLoading(false);
        setIsSubscribed(false);
      } else {
        console.log("No such document!");
      }
    };
    getBooking().catch(console.error);
    // return () => setIsSubscribed(false);
  }, [booking_id, isSubscribed]);

  // if (data.length !== 0) {
  //   console.log(data);
  //   trypo();
  // }
  // console.log(experience);

  // edit the data stored from useState data (time needs to be from e.g. 1000 - 1200 to 10:00am - 12:00pm) with setData
  // also format the date from "01/01/23" to "01 January 2023, Monday"
  useEffect(() => {
    const editData = () => {
      setLoading(true);
      let timing = data.Time;
      timing = timing.replace(/(\d{2})(\d{2})/g, "$1:$2");
      // console.log(timing);
      const [d, m, y] = data.Date.split("/");
      const format_date = new Date(`20${y}-${m}-${d}`);
      let day = format_date.getDay();
      let month = format_date.getMonth();
      let year = format_date.getFullYear();
      let date_of = format_date.getDate();
      let day_of_week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let month_of_year = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      setStartDate(`${year}-${m}-${d}`);
      setEndDate(`${year}-${m}-${d}`);
      setDate(
        `${date_of} ${month_of_year[month]} ${year}, ${day_of_week[day]}`
      );
      setTime(timing);
      setIsDataEdited(true);
      setLoading(false);
    };
    if (!loading && data.Time && data.Date) {
      editData();
    }
  }, [loading, data.Time, data.Date]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="share">
      <div className="row">
        <div className="col">
          {/* <img src={require("../assets/plant.png")} alt="..." /> */}
          
          <div className="row justify-content-center">
            <div className="col-3 booking-share-text">
              Booking Details
            </div>
            <p>
              Thank you for planting a seed towards sustainability and a fruitful team
              experience!
            </p>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                    <img className="share-image" src={data.Images[0]} alt="" />
              </div>
              <div className="col-6">
                <div className="card carded">
                  <div className="card-body">
                    <h3 className="card-title">Experience Details</h3>
                    <hr />
                    {/* Map the data stored */}
                    <p className="card-text">
                      <b>Experience:</b>
                      <br />
                      {data.ExpName}
                    </p>
                    <p className="card-text">
                      <b>Location:</b>
                      <br />
                      {data.Exp_Loc}
                    </p>
                    <p className="card-text">
                      <b>Time:</b>
                      <br />
                      {time}
                    </p>
                    <p className="card-text">
                      <b>Participants:</b>
                      <br />
                      {data.noOfPax}
                    </p>
                    <p className="card-text">
                      <b>Date:</b>
                      <br />
                      {date}
                    </p>
                    {/* <p className="card-text"><b>Experience:</b><br/>Lunch & Learn: Let’s Stop Eating Plastic</p>
                            <p className="card-text"><b>Location:</b><br/>Clementi Park, Singapore 123456</p>
                            <p className="card-text"><b>Time:</b><br/>9:00am - 12:00pm</p>
                            <p className="card-text"><b>Participants:</b><br/>49</p>
                            <p className="card-text"><b>Date:</b><br/>21 February 2023, Monday</p> */}
                    {isDataEdited ? (
                      <add-to-calendar-button
                        options="'Apple','Google','MicrosoftTeams'"
                        buttonsList="true"
                        buttonStyle="round"
                        hideTextLabelButton="true"
                        name={data.ExpName}
                        location={data.Exp_Loc}
                        startDate={startDate}
                        endDate={endDate}
                        startTime={time.slice(0, 5)}
                        endTime={time.slice(8, 13)}
                        timeZone="Asia/Singapore"
                        size="4"
                      ></add-to-calendar-button>
                    ) : null}
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

export default Share;
