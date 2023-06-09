import React from 'react'
import { useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import '../css/Contact.css'
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import {MDBIcon} from 'mdb-react-ui-kit';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MainContact = () => {
  const noti = withReactContent(Swal)
    const [Id, setId] = useState("")
    const [Nombre, setNombre] = useState("")
    const [Email, setEmail] = useState("")
    const [Telefono, setTelefono] = useState("")
    const [Consulta, setConsulta] = useState("")
    const [listConsultas, setListConsultas]= useState([])
    const handleSummit = () => {

      let consult = {
        Id:Id,
        Nombre:Nombre,
        Email:Email,
        Telefono:Telefono,
        Consulta:Consulta
      }

    setListConsultas([...listConsultas, consult])
      console.log(listConsultas)


    }
    const pregdelete = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    const deleteConsulta = (cons) =>{
      pregdelete.fire({
        title: '¿Estas seguro que desea eliminar la consulta de: "<strong>'+cons.Nombre+'</strong>"?' ,
        text: "¡Esta acción no se podrá revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        
      if(result.isConfirmed){
          noti.fire({
            title: <strong>¡Eliminado!</strong>,
            html: <i>La consulta de <strong>{cons.Nombre}</strong> ha sido eliminada correctamente</i>,
            icon: 'success',
            timer: 3000
          })


          
            const arrayNuevo = listConsultas.filter((consult)=> consult.Id !== cons.Id )
             setListConsultas(arrayNuevo)

          




      } 
      })
  
  
  
  
      
    }
    // useEffect(()=>{
    //   listar()
    // },[listConsultas])

  return (
    <div style={{marginTop:'100px'}}>
    <div className='formulario'>
      <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
    <h2>Contáctanos</h2>
    <MDBInput onChange={(e)=> {setId(e.target.value)}} label='Id' v-model='id' wrapperClass='mb-4' />

    <MDBInput onChange={(e)=> {setNombre(e.target.value)}} label='Nombre' v-model='Nombre' wrapperClass='mb-4' />

    <MDBInput onChange={(e)=> {setEmail(e.target.value)}} type='Email' label='Email' v-model='email' wrapperClass='mb-4' />

    <MDBInput onChange={(e)=> {setTelefono(e.target.value)}} label='Telefono' v-model='Telefono' wrapperClass='mb-4' />

    <MDBTextArea onChange={(e)=> {setConsulta(e.target.value)}} wrapperClass='mb-4' label='Consulta' />

    <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Enviarme una copia' />

    <MDBBtn onClick={handleSummit} color='primary' block className='my-4'>
      Enviar
    </MDBBtn>
  </form>
  </div>
  <br />
  <br />
  <br />
<div className='formulario'>
  <Table striped bordered hover variant="dark" size="sm" style={{width:"1200px"}} className='dgv '>
    <thead>
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Telefono</th>
        <th>Consulta</th>
        <th> </th>
      </tr>
      
    </thead>
    <tbody>
      {listConsultas.map((cons) =>
      
      (
        
        <tr key={cons.Id}>
         
        <td> {cons.Id} </td>
        <td> {cons.Nombre} </td>
        <td> {cons.Email} </td>
        <td> {cons.Telefono} </td>
        <td> {cons.Consulta} </td>
        <td style={{width:"75px"}}>
        <ButtonGroup aria-label="Basic example">
        <Button onClick={()=>{deleteConsulta(cons)}} style={{marginRight:"10px"}} variant='danger'><MDBIcon fas icon="trash-alt" /></Button> 
         </ButtonGroup>
          
        </td>

        
        </tr>
       
      ))}
      
    </tbody>
  </Table>

  </div>
  </div>
  )
}

export default MainContact