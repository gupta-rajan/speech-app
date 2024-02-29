import React from 'react';
import { Card, Row, Col} from 'react-bootstrap';
import { FaEnvelope, FaGlobe, FaLinkedin, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FacultyCard = ({ faculty }) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleBio = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="my-3 p-3 rounded">
      <Row>
        <Col md={4} xs={12} className="text-center mb-3 mb-md-0 d-flex flex-column align-items-center">
          <div style={{ maxWidth: '300px', margin: 'auto' }}>
            <Card.Img src={faculty.image} variant="top" className="img-fluid" style={{ margin: 'auto' }} />
            <div className="mt-3">
              <Link to={`mailto:${faculty.email}`} target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaEnvelope/>
              </Link>
              <Link to={faculty.personalWeb} target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaGlobe/>
              </Link>
              <Link to={faculty.linkedin} target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaLinkedin/>
              </Link>
              <Link to={faculty.scholarLink} target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaGraduationCap/>
              </Link>
            </div>
          </div>
        </Col>
        <Col md={8} xs={12}>
          <Card.Body className="d-flex flex-column justify-content-between h-100">
            <div>
              <Card.Title>
                <strong>{faculty.name}</strong>
              </Card.Title>
              <Card.Text>
                <strong>Department:</strong> {faculty.department}
              </Card.Text>
              <Card.Text>
                <strong>Office Address:</strong> {faculty.officeAddress}
              </Card.Text>
              <Card.Text>
                <strong>Area of Interest:</strong> {faculty.areaOfInterest}
              </Card.Text>
              <Card.Text>
                <strong>Bio:</strong> {expanded ? faculty.bio : `${faculty.bio.slice(0, 100)}...`}
                {faculty.bio.length > 100 && (
                  <button className="btn btn-link p-0 read-more" onClick={toggleBio}>
                    {expanded ? 'Read less' : 'Read more'}
                  </button>
                )}
              </Card.Text>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default FacultyCard;
