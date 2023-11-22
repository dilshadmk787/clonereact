import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar style={{height:'60px'}} className='fixed-top' bg="light" data-bs-theme="light">
    <Container>
      <Nav className="me-auto">
      <Navbar.Brand href="#home"><img src="https://w7.pngwing.com/pngs/517/795/png-transparent-graphics-cards-video-adapters-nvidia-tesla-graphics-processing-unit-geforce-nvidia-electronics-company-text.png" width={'100px'} alt="" /></Navbar.Brand>
        <Nav.Link href="#home">products</Nav.Link>
        <Nav.Link href="#features">solutions</Nav.Link>
        <Nav.Link href="#pricing">industries</Nav.Link>
        <Nav.Link href="#pricing">for you</Nav.Link>

      </Nav>
      <Nav className="ms-auto">
      <Nav.Link href="#features">shop</Nav.Link>
        <Nav.Link href="#pricing">drivers</Nav.Link>
        <Nav.Link href="#pricing">support</Nav.Link>
          <Nav.Link className='btn border border-secondary ms-3 mt-2'><i class="fa-solid fa-magnifying-glass"style={{color:'black'}}></i></Nav.Link>
          <Nav.Link className='btn border border-secondary rounded ms-3 mt-2'><i class="fa-regular fa-user" style={{color: 'black'}}></i> </Nav.Link>
        </Nav>
    </Container>
  </Navbar>
  )
}

export default Header