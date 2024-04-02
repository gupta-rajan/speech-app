import React,  { useState, useEffect }  from 'react'
import {Navbar, Nav, Container,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import logo from '../assets/logo.png';
import axios from 'axios';

const Header = () => {

    const [researchData, setResearchData] = useState([]);

    useEffect(() => {
      const fetchResearchData = async () => {
        try {
          const { data } = await axios.get('/api/research');
          setResearchData(data);
        } catch (error) {
          console.error('Error fetching research data:', error);
        }
      };
      fetchResearchData();
    }, []);

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
                        <NavDropdown title="RESEARCH" id="research-dropdown">
                            {researchData.map((research) => (
                            <LinkContainer key={research._id} to={`/research/${research._id}`}>
                                <NavDropdown.Item>{research.title}</NavDropdown.Item>
                            </LinkContainer>
                            ))}
                        </NavDropdown>
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