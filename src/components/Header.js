import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className='logo' onClick={()=> navigate("/")}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end flex-grow-1 pe-2">
          <Button className='button' variant="info" onClick={()=> navigate("/login")}>login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
