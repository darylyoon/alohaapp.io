import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useLocation } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const location = useLocation();

  const [booking, setBooking] = useState([]);
  const [amount, setAmount] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const data = location.state.data;
  const date = location.state.date;
  const time = location.state.time;
  const pax = location.state.numPax;

  console.log(data);

  // console.log(location.state);
  // console.log(location.state.data);

  useEffect(() => {
    const all = async () => {
      await getDocs(collection(db, "Booking")).then((querySnapshot) => {
        if (!isSubscribed) {
          return;
        }
        const info = querySnapshot.docs.map((doc) => [doc.id, doc.data()]);
        setBooking(info);
      });
    };
    all();
    return () => setIsSubscribed(false);
  }, [isSubscribed]);

  function goBack() {
    navigate(-1);
  }

  function convertDate(date) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
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

    return (
      date.getDate() +
      " " +
      months[date.getMonth()] +
      " " +
      date.getYear() +
      ", " +
      days[date.getDay()]
    );
  }

  function databaseDate(date) {
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getYear() - 100;
    return `${d < 10 ? "0" + d : d}/${m < 10 ? "0" + m : m}/${y}`;
  }

  function onChangeAmount(e) {
    setAmount(e.target.value);
  }

  function goStripe(data, date, time, amount) {
    let booking_id = 0;
    while (true) {
      booking_id = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
      let str_booking_id = String(booking_id);
      if (!booking[0].includes(str_booking_id)) {
        break;
      }
    }
    // console.log(booking_id);

    const firstNameInput = document.getElementById("firstName").value;
    const lastNameInput = document.getElementById("lastName").value;
    const emailInput = document.getElementById("email").value;
    const mobileNumberInput = document.getElementById("mobileNumber").value;
    const companyNameInput = document.getElementById("companyName").value;
    const companyAddressInput = document.getElementById("companyAddress").value;
    // validate input
    if (firstNameInput === "" || lastNameInput === "" || emailInput === "" || mobileNumberInput === "" || companyNameInput === "" || companyAddressInput === "") {
      setErrMsg("Please fill in all the fields");
      return;
    }
    const bookingInfo = {
      Date: databaseDate(date),
      ExpID: data[0],
      ExpName: data[1].ExpName,
      BookingID: booking_id,
      Exp_Loc: data[1].Exp_Loc,
      Time: time,
      pay_amount: parseFloat(amount),
      bookerDetails: {
        companyAddress: companyAddressInput,
        companyName: companyNameInput,
        email: emailInput,
        firstName: firstNameInput,
        lastName: lastNameInput,
        phone: mobileNumberInput,
      },
      noOfPax: parseInt(pax),
      Images: data[1].Images,
    };

    navigate(`/stripe`, { state: { bookingInfo: bookingInfo } });
  }

  return (
    <div class="checkout">
      {/* Checkout Back Button */}
      <button class="checkout_back_button" onClick={() => goBack()}>
        <span class="arrow_back">&#8249;</span>
        <span class="back_text">Back</span>
      </button>

      {/* Checkout Group */}
      <div class="container-fluid checkout_group">
        <div class="row">
          <div class="col-5 checkout_details">
            <div class="checkout_details_header">Your Experience</div>

            <hr class="hr_checkout" />

            <div class="row co_first">
              <table class="experience_detail_table w-auto">
                <tr>
                  <td class="w-25" rowSpan={5}>
                    <img
                      class="experience_cover_image"
                      src={location.state.data[1].Images[0]}
                      alt=""
                    />
                  </td>
                  <th class="experience_title w-75" colSpan={2}>
                    {location.state.data[1].ExpName}
                  </th>
                </tr>

                <tr>
                  <td className="detail_alignment">Date:</td>
                  <td className="detail_alignment">
                    {convertDate(location.state.date)}
                  </td>
                </tr>

                <tr>
                  <td className="detail_alignment">Location:</td>
                  <td className="detail_alignment">
                    {location.state.data[1].Exp_Loc}
                  </td>
                </tr>

                <tr>
                  <td className="detail_alignment">Time:</td>
                  <td className="detail_alignment">{location.state.time}</td>
                </tr>

                <tr>
                  <td className="detail_alignment">Participants:</td>
                  <td className="detail_alignment">{pax}</td>
                </tr>
              </table>
            </div>
            <hr class="hr_checkout" />
            <div class="row co_price co_price_head">
              <div class="col-6 leftside">
                <p>Price</p>
              </div>
              <div class="col-6 rightside">
                <p>Qty</p>
              </div>
            </div>

            <div class="row co_price">
              <div class="col-6 leftside">
                <p>${location.state.data[1].Price.p_Pax}</p>
              </div>
              <div class="col-6 rightside">
                <p>x{pax}</p>
              </div>
            </div>

            <hr class="hr_checkout" />

            <div class="row cobold">
              <div class="col-6 leftside">
                <p>Subtotal</p>
              </div>
              <div class="col-6 rightside">
                <p>${(location.state.data[1].Price.p_Pax * pax).toFixed(2)}</p>
              </div>
            </div>

            <hr class="hr_checkout" />

            <div class="row">
              <ul class="co_options">
                <li class="r1">
                  <input type="radio" name="checkout" value={(location.state.data[1].Price.p_Pax * pax).toFixed(2)} onChange={onChangeAmount} checked={amount === (location.state.data[1].Price.p_Pax * pax).toFixed(2)} />
                  <span>Pay full amount of ${(location.state.data[1].Price.p_Pax * pax).toFixed(2)} to book</span>
                </li>
                <li class="r2">
                  <input type="radio" name="checkout" value={200} onChange={onChangeAmount} checked={amount === "200"} />
                  <span>Pay partial amount of $200.00* </span>
                </li>
              </ul>
            </div>

            <hr class="hr_checkout" />

            <div class="row cobold">
              <div class="col-6 leftside">
                <p>Total</p>
              </div>
              <div class="col-6 rightside">
                <p>{document.getElementsByName("checkout").value}</p>
              </div>
            </div>

            <div class="row co_tc">
              <p>* Reserve your selected experience date</p>
              <p>* Customise experience with an Aloha Relationship Manager</p>
              <p>* Flexible cancellation policy</p>
              <p>
                * Save 10% off final amounts if additional repeat experiences
                are confirmed at time of purchase
              </p>
              <p>
                * 1% of your team’s experiences purchase will be contributed to
                support Planet’s conservation initiatives
              </p>
            </div>
          </div>

          <div class="col-6 checkout_form">
            <h3>Detail Confirmation</h3>
            <hr />

            <div class="row">
              <div className="col-6">
                <label for="name">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  aria-describedby="basic-addon3"
                  placeholder="First Name"
                />
              </div>
              <div className="col-6">
                <label for="name">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  aria-describedby="basic-addon3"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div class="row">
              <div className="col-6">
                <label for="name">Email</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  aria-describedby="basic-addon3"
                  placeholder="Email"
                />
              </div>
              <div className="col-6">
                <label for="email">Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="mobileNumber"
                  aria-describedby="basic-addon3"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <label for="card">Company Name</label>
            <input
              type="text"
              class="form-control"
              id="companyName"
              aria-describedby="basic-addon3"
              placeholder="Company Name"
            />

            <label for="card">Company Address</label>
            <input
              type="text"
              class="form-control"
              id="companyAddress"
              aria-describedby="basic-addon3"
              placeholder="Company Address"
            />

            <button
              type="button"
              class="btn pay_btn"
              onClick={() => goStripe(data, date, time, amount)}
              disabled={amount === 0}
            >
              Checkout
            </button>
            {errMsg !== "" ? <p className="errMsg text-danger fw-bold text-center pt-3">{errMsg}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
