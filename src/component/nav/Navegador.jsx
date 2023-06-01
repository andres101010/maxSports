import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Navegador = () => {
  return (
    <div className='container-fluid p-0 m-0'>
         <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Max Sport </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/inicio'} style={{textDecoration:'none', marginRight:'10px', color:'white'}}>Home</Link>
            <Link to={'/acciones'} style={{textDecoration:'none', marginRight:'10px', color:'white'}}>Acciones</Link>
            
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Navegador