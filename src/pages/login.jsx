import React from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';

function Login() {
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

              <MDBRow>
                <MDBCol col='6'>
                    <label for='form1' className='form-label'>First name</label>
                  <MDBInput wrapperClass='mb-4' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                <label for='form2' className='form-label'>Last name</label>
                  <MDBInput wrapperClass='mb-4' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <label for='form3' className='form-label'>Email</label>
              <MDBInput wrapperClass='mb-4'  id='form3' type='email'/>

              <label for='form4' className='form-label'>Password</label>
              <MDBInput wrapperClass='mb-4'  id='form4' type='password'/>

              <button className='w-100 mb-1 loginbtn' size='md'>Sign up</button>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    );
}

export default Login;