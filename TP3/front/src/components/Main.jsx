import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = (props) => {

  const nombre= props.alumno.nombreCompleto
  const edad= props.alumno.edad
  const legajo= props.alumno.legajo
  const celular= props.alumno.celular
  const hobie= props.alumno.hobie
  const instagram= props.alumno.instagram
  const image= props.alumno.image
  return (
    <div style={{alignItems:'center', display:'flex', justifyContent:'center', marginTop:'200px'}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Hola, soy {nombre}, tengo {edad} años, estudio programacion en UTN, mi legajo es {legajo}, tengo un hobie y es {hobie}.
          Mis celular es: {celular} 
        </Card.Text>
        <a href={instagram} target='blank'><Button variant="primary" >Instagram</Button></a>
        
      </Card.Body>
    </Card>
    

    </div>
  )
}

export default Main