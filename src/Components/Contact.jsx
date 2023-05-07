import React from 'react'
import { MDBInput,MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import '../css/contact.css'

const Contact = () => {
  return (
    <div className='divcont'>

<form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contactanos</h2>

      <MDBInput label='Nombre' v-model='nombre' wrapperClass='mb-4' />

      <MDBInput type='Email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Tema' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Mensaje' />

      <MDBCheckbox wrapperClass='d-flex justify-content-center' label='  Enviarme una copia' />

      <MDBBtn color='primary' block className='my-4'>
        Enviar
      </MDBBtn>
    </form>

    </div>
  )
}

export default Contact