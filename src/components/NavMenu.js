import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'


export default function NavMenu() {


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
            <NavLink className="d-inline p-2 text-white nav-item" to="/">
            Feed
            </NavLink>
            <NavLink className="d-inline p-2 text-white nav-item" to="/profile">
            Profile
            </NavLink>
            <NavLink className="d-inline p-2 text-white nav-item" to="/spotify">
            Spotify
            </NavLink> 
            <NavLink className="d-inline p-2 text-white nav-item" to="/signin">
            SignIn
            </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

