import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBootstrap() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Bootstrap Nav</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" end>About</Nav.Link>
                        <Nav.Link as={NavLink} to="/services" end>Services</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" end>Contact</Nav.Link> 
                        <Nav.Link as={NavLink} to="/Profile" end>Profile</Nav.Link> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBootstrap;
