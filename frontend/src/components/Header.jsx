import React,  { useState, useEffect }  from 'react'
import {useNavigate} from 'react-router-dom';
import {Navbar, Nav, Container,NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import {logout} from '../slices/authSlice';
import logo from '../assets/logo.png';
import axios from 'axios';

const Header = () => {
    const {userInfo} = useSelector((state)=>state.auth);
    const [researchData, setResearchData] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async()=>{
        try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate('/login');
        } catch (err) {
        console.log(err);
        }
    }

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
                <Navbar.Brand><img src={logo} alt='SITAR' style={{backgroundColor: "#f9f9f9",borderRadius:"2px"}} className='mx-2'/>
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
                        <LinkContainer to='/gallery'>
                            <Nav.Link>GALLERY</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/demo'>
                            <Nav.Link>DEMO</Nav.Link>
                        </LinkContainer>
                        {userInfo? (
                            <NavDropdown title={userInfo.name} id='username'>
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                            </NavDropdown>
                        ):null}
                        {userInfo && userInfo.isAdmin && (
                            <NavDropdown title='Admin' id='adminmenu'>
                                <LinkContainer to="/admin/userList">
                                    <NavDropdown.Item>Users</NavDropdown.Item>
                                </LinkContainer> 
                                <LinkContainer to="/admin/eventList">
                                    <NavDropdown.Item>Events</NavDropdown.Item>
                                </LinkContainer> 
                                <LinkContainer to="/admin/projectList">
                                    <NavDropdown.Item>Projects</NavDropdown.Item>
                                </LinkContainer> 
                                <LinkContainer to="/admin/positionList">
                                    <NavDropdown.Item>Positions</NavDropdown.Item>
                                </LinkContainer> 
                                <LinkContainer to="/admin/facultyList">
                                    <NavDropdown.Item>Faculty</NavDropdown.Item>
                                </LinkContainer> 
                                <LinkContainer to="/admin/studentList">
                                    <NavDropdown.Item>Students</NavDropdown.Item>
                                </LinkContainer> 
                                <LinkContainer to="/admin/researchList">
                                    <NavDropdown.Item>Research</NavDropdown.Item>
                                </LinkContainer> 
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header