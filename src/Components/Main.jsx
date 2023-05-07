import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = (props) => {
   // const ale = "Alejandro Torres"
    const nombre= props.alumno.nombre
    const apellido= props.alumno.apellido
    const edad= props.alumno.edad
    const legajo=  props.alumno.legajo
    const celular=  props.alumno.celular
    const hobby=  props.alumno.hobby
    const foto= props.alumno.foto
    console.log(props)
  return (
    
    <div>
{/*       
        <p>Hola soy {ale}, estudiante de programación en UTN - FRT, aprendí lenguajes como C#, sql, y pseudocodigo xD </p> */}
      
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={foto} style={{width: "286px"}}/>
      <Card.Body>
        <Card.Title>{apellido}{", "}{nombre}</Card.Title>
        <Card.Text>
          ¡Hola! Mi nombre es {nombre}, soy estudiante de programación, mi legajo es {legajo}, mi hobby es {hobby}, tengo {edad} años, y mi telefono de contacto es {celular}.
        </Card.Text>
        <Button variant="primary">Contactar</Button>
      </Card.Body>
    </Card>


    </div>
  )
}

export default Main