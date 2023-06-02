import React from 'react'
import '../css/About.css'
import { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import '../css/About.css'
const MainAbout = () => {


  const [imagen, setImagen] = useState(1)

  const handleChangeImg =() => {
    
   

    imagen === 9 ? setImagen(1) : setImagen(imagen+1)
    

  }
  return (
    <div>
      <div style={{display:'flex', alignItems: 'center', justifyContent:'center', marginTop:'150px'}}>
      <img className='imagenxd' style={{maxHeight: '450px', maxWidth:'450px'}} src={imagen + '.jpg'} alt=""/>

        <p  style={{marginLeft:'300px', width:'500px', fontFamily:'serif', fontSize:'20px'}}>
          Hola, mi nombre es <strong>Alejandro Torres</strong>, estudiante de TUP en UTN-FRT, aprendí muy bien a programar en pseint con mi profesora Paulina Romero, hoy en día sé calcular el área y el perímetro de una manera muy eficaz. <br /> <br />
          Algunos de mis proyectos terminados son: <br />
          *Sistema de punto de venta en <strong>C# + SQL Server</strong><br />
          *Sistema de historial clinico en <strong>C# + SQL Server</strong><br />
          *Sistema de ventas con órdenes de compra en <strong>C# + SQL Server</strong><br />
          <br />
          Y actualmente estoy trabajando en un proyecto de punto de venta + facturación electronica en  <strong>React + NodeJs + Express + MySql</strong> 
        


        </p>
    </div>
    <br />
        <div style={{display:'flex', alignItems: 'center', justifyContent:'center', marginRight:'600px'}}>
        <ButtonGroup aria-label="Basic example">
        <Button onClick={handleChangeImg} style={{marginRight:"10px"}} variant='danger'>Cambiar Foto</Button> 
         </ButtonGroup>
         </div>


    </div>
  )
}

export default MainAbout