import React, { useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon,
    MDBValidation,
    MDBValidationItem
  }
  from 'mdb-react-ui-kit';
// import { googleAuthProvider } from "../util/google_authentication_provider";
import { firebaseAuth, provider, db } from "../util/firebaseInit";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


function Login() {
  const [formValue, setValues] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  const onChange = (e) => {
    setValues({
      formValue,
      [e.target.name]: e.target.value,
    });
  };
  async function googleLogin() {
    const result = signInWithPopup(firebaseAuth, provider)
    signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        return result

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Boo")
      });
      await setDoc(doc(db, 'User', 'U2'), {
        name : result.user.displayName,
        email : result.user.email,
        // password : result.user.password
      });
    };
  
  async function pwLogin() {
    createUserWithEmailAndPassword(firebaseAuth, formValue.email, formValue.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      await setDoc(doc(db, "User", "U1"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
  }
    return (
    <MDBContainer fluid className='p-4 login' >

      <MDBRow className="loginmain">

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center p-5 loginbox'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-5">
            The best offer <br />
            <span className="orangehighlight">for your business</span>
          </h1>

          <p className='px-5' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className="loginbox">

          <MDBCard className='my-5'>
            <MDBCardBody className='p-1'>

              <MDBValidation isValidated>
                <MDBValidationItem col='6' invalid feedback='Please enter your first name.'>
                    <label for='form1' className='form-label'>First name</label>
                  <MDBInput 
                  wrapperClass='mb-4' 
                  id='form1' 
                  name="fname"
                  value = {formValue.fname}
                  onChange = {onChange}
                  required
                  />
                </MDBValidationItem>

                <MDBValidationItem col='6' invalid feedback='Please enter your last name'>
                <label for='form2' className='form-label'>Last name</label>
                  <MDBInput 
                  wrapperClass='mb-4' 
                  id='form2' 
                  name="lname"
                  value={formValue.lname}
                  onChange={onChange}
                  required
                  />
                </MDBValidationItem>

              <MDBValidationItem invalid feedback='Please enter a valid email!'>
              <label for='form3' className='form-label'>Email</label>
              <MDBInput
              wrapperClass='mb-4'  
              id='form3' 
              name="email"
              type='email'
              value={formValue.email}
              onChange={onChange}
              required
              />
              </MDBValidationItem>

              <MDBValidationItem>
              <label for='form4' className='form-label'>Password</label>
              <MDBInput 
              wrapperClass='mb-4'  
              id='form4' 
              name="password"
              type='password'
              value={formValue.password}
              onChange={onChange}
              required
              />
              </MDBValidationItem>

              <MDBBtn className='w-100 mb-1 loginbtn' size='md' onClick={pwLogin}>Sign up</MDBBtn>

              <MDBBtn className='Google' size="md" onClick={googleLogin}><img src="../assets/btn_google_signin_light.png" alt=""/></MDBBtn>
              </MDBValidation>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
    );
}

export default Login;