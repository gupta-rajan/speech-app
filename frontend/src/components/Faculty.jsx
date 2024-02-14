import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope,FaGlobe, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

const Faculty = ({ faculty }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleBio = () => {
    setExpanded(!expanded);
};

  return (
    <Card className="my-3 p-3 rounded">
      <Row>
        <Col md={4} style={{margin:'auto'}}>
          <div style={{ width: '300px', height: '300px', overflow: 'hidden', margin: 'auto' }}>
            <Card.Img src={faculty.image} variant="top" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px' }}>
            <div style={{ marginRight: '20px' }}>
              <Link to={`mailto:${faculty.email}`} target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </Link>
            </div>
            <div style={{ marginRight: '20px' }}>
              <Link to={faculty.personalWeb} target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </Link>
            </div>
            <div style={{ marginRight: '20px' }}>
              <Link to={faculty.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </Link>
            </div>
            <div style={{ marginRight: '20px' }}>
              <Link to={faculty.scholarLink} target="_blank" rel="noopener noreferrer">
              <FaGraduationCap />
              </Link>
            </div>
          </div>
        </Col>
        <Col md={8}>
          <Card.Body className="d-flex flex-column justify-content-between">
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
                <button className="btn btn-link" onClick={toggleBio}>
                  {expanded ? 'Read less' : 'Read more'}
                </button>
              )}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Faculty;
