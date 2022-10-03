import React from 'react'
import {NavLink, useLocation } from 'react-router-dom'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'


export default function NavMenu() {
  const location = useLocation();

  if (location.pathname !== "/login" && location.pathname !== "/signup") {
    return (
        <Navbar bg="black" expand="lg" className='navbar'>
        <Container>
            <Navbar.Brand className='title'>
            <NavLink className="d-inline p-2 text-white nav-item" to="/">
            AUDIOPHILE <i className="fa-solid fa-record-vinyl audio"></i>
            </NavLink>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"className='ham' />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
            <NavLink className="d-inline p-2 text-white nav-item" to="/about">
            About
            </NavLink>
            <NavLink className="d-inline p-2 text-white nav-item" to="/feed">
            Feed
            </NavLink>
          
            <NavLink className="d-inline p-2 text-white nav-item" to="/spotify">
            Post
            </NavLink> 
            <NavLink className="d-inline p-2 text-white nav-item" to="/login">
              Logout
            </NavLink> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    ) } else {
      return; 
    }
}

