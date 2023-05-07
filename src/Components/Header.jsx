import React from 'react'
//import fotoAle from '../assets/Ale.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
            <Nav.Link href="#pricing">No se</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

        {/* <h1>Pedro Alejandro Torres Salazar</h1>
    <img src={fotoAle} alt="" width="200px" /> */
    }
    
    </div>
  )
}

export default Header