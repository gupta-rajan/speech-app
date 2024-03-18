import React from 'react'
import {Navbar, Nav, Container,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand><img src={logo} alt='SITAR' className='mx-2'/>
                    SITAR Group
                </Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>HOME</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/projects'>
                            <Nav.Link>PROJECTS</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="PEOPLE" id="people-dropdown">
                            <LinkContainer to="/people/faculty"><NavDropdown.Item>FACULTY</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/people/students"><NavDropdown.Item>STUDENTS</NavDropdown.Item></LinkContainer>
                            <LinkContainer to="/people/alumni"><NavDropdown.Item>ALUMNI</NavDropdown.Item></LinkContainer>
                        </NavDropdown>
                        <LinkContainer to='/news'>
                            <Nav.Link>NEWS</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/positions'>
                            <Nav.Link>POSITIONS</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/events'>
                            <Nav.Link>EVENTS</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header