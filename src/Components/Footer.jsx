import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import "mdbreact/dist/css/mdb.css";
 import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  //MDBCol,
  //MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/AleTorres00' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/AleTorres0_' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/fox._developer/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/pedro-alejandro-torres-salazar-8067a0225/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/FoxxxDeveloper' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright
        <a className='text-white' href='https://www.instagram.com/fox._developer/'>
          : Fox Developer
        </a>
      </div>
    </MDBFooter>

  )
}

export default Footer