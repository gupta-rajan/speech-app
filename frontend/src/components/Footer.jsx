import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <Container>
            <Row className='text-center py-3'>
                    <Col>
                        <Link to='https://www.youtube.com/@IITDharwadOfficialChannel' target='_blank' className='mx-2'><FaYoutube size={30}/></Link>
                        <Link to='https://twitter.com/iitdhrwd' target='_blank' className='mx-2'><FaTwitter size={30}/></Link>
                        <Link to='https://www.linkedin.com/in/iit-dharwad-548551161/' target='_blank' className='mx-2'><FaLinkedin size={30}/></Link>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col>
                        <p>IIT Dharwad &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer