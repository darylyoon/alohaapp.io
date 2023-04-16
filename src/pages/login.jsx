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
import { firebaseAuth, provider, db } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Router, useNavigate } from "react-router-dom";


function Login() {
  const [formValue, setValues] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  const onChange = (e) => {
    setValues({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  function storeRedirect() {
    sessionStorage.setItem('username', formValue.email)
    if (sessionStorage.getItem('username') !== null) {
      console.log(sessionStorage.getItem('username'));
      navigate("/");
    }
  }

  function googleSignIn() {
    signInWithPopup(firebaseAuth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // console.log(result);
        const user = result.user;
        console.log(user);
        const userRef = doc(db, "User", user.uid);
        setDoc(userRef, {
          name: user.displayName,
          email: user.email,
        });
        // const res = db.collection('User').doc('U1').set(result);
        // console.log(res)
        storeRedirect();

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Boo")
        return "Tough"
      });
    };

  function signIn () {
    signInWithEmailAndPassword(firebaseAuth, formValue.email, formValue.password)
      .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
        storeRedirect();
    
      // Authenticate user
      })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage)
    });
  }
  
  return (
  <MDBContainer fluid className='p-4 login' >

    <MDBRow className="loginmain">

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center p-5 loginbox'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-5">
          Prosper with <br />
          <span className="orangehighlight">Purpose</span>
        </h1>

        <p className='px-5' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          Engaging Experiences Driving Change
        </p>

      </MDBCol>

      <MDBCol md='6' className="loginbox">

        <MDBCard className='my-5'>
          <MDBCardBody className='p-1'>

            <MDBValidation isValidated>

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

              <MDBBtn className='w-100 mb-1 loginbtn' size='md' type="submit" onClick={signIn}>Sign in</MDBBtn>

              <MDBBtn className='Google' size="md" onClick={googleSignIn}><img src={require("../assets/btn_google_signin_light.png")} alt="Google Sign In"/></MDBBtn>

              Do not have an account? <a href="/signup">Sign Up</a>

            </MDBValidation>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>
  </MDBContainer>
  );
    }
export default Login;