import React from "react";
import "add-to-calendar-button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { RWebShare } from "react-web-share";
// import { useLocation } from "react-router-dom";

function Confirmation() {
  // const location = useLocation();
  // console.log(location.state);
  const { booking_id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");

  console.log(data.Images[0]);
  // const [experience, setExperience] = useState("");

  // function trypo() {
  //   const all = async () => {
  //     await getDocs(collection(db, "Experiences")).then((querySnapshot) => { 
  //       const info = querySnapshot.docs.map((doc) => [doc.id, doc.data()]); 
  //       console.log(info[0][0]); 
  //       console.log(data.ExpID) 
  //       for (let i = 0; i < info.length; i++) { 
  //         if (info[i][0] === data.ExpID) { 
  //           setExperience(info[i]); 
  //         } 
  //       } 
  //       console.log(experience);
  //     }); 
  //   }; 
  //   all(); 
  // };

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
      console.log(timing);
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
    <div className="confirmation">
      {/* <img src={require("../assets/plant.png")} alt="..." /> */}
      {console.log(data.Images[0])}
      <img src={data.Images[0]} alt="" />
      <h4>Booking Confirmed</h4>
      <p>
        Thank you for planting a seed towards sustainability and a fruitful team
        experience!
      </p>
      <RWebShare
        data={{
          text: "I just booked an experience from Aloha!",
          url: "https://google.com/", // hardcode for now
        }}
      >
        <button className="shareButton">Share</button>
      </RWebShare>
      <div className="container-fluid">
        <div className="row">
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
                {!isSubscribed ? (
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

          <div className="col-6">
            <div className="card cardbd">
              <div className="card-body">
                <h3 className="card-title">Booking Details</h3>
                <hr />
                <p className="card-text">
                  <b>Booker Name:</b>
                  <br />
                  {data.bookerDetails?.firstName} {data.bookerDetails?.lastName}
                </p>
                <p className="card-text">
                  <b>Email:</b>
                  <br />
                  {data.bookerDetails?.email}
                </p>
                <p className="card-text">
                  <b>Mobile:</b>
                  <br />
                  +65 {data.bookerDetails?.phone}
                </p>
                <p className="card-text">
                  <b>Company Name:</b>
                  <br />
                  {data.bookerDetails?.companyName}
                </p>
                <p className="card-text">
                  <b>Amount Paid:</b>
                  <br />${data.pay_amount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
