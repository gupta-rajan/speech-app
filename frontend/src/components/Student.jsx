import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaEnvelope , FaLinkedin, FaGraduationCap } from 'react-icons/fa';

const Student = ({ student }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="my-3 p-3 rounded">
      <Row>
        <Col md={4} style={{margin:'auto'}}>
          <div style={{ width: '300px', height: '300px', overflow: 'hidden',margin: 'auto' }}>
            <Card.Img src={student.image} variant="top" style={{ width: '100%', height: '100%', objectFit: 'cover'}}/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px' }}>
            <div style={{ marginRight: '20px' }}>
              <Link to={`mailto:${student.email}`} target="_blank" rel="noopener noreferrer">
                <FaEnvelope />
              </Link>
            </div>
            <div style={{ marginRight: '20px' }}>
              <Link to={student.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </Link>
            </div>
            <div style={{ marginRight: '20px' }}>
              <Link to={student.scholarLink} target="_blank" rel="noopener noreferrer">
                <FaGraduationCap />
              </Link>
            </div>
          </div>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>
              <strong>{student.name}</strong>
            </Card.Title>
            <Card.Text>
              <strong>Roll Number:</strong> {student.rollNumber}
            </Card.Text>
            <Card.Text>
              <strong>Position:</strong> {student.position}
            </Card.Text>
            <Card.Text>
              <strong>Thesis Title:</strong> {student.thesisTitle}
            </Card.Text>
            <Card.Text>
              <strong>Areas of Interest:</strong> {student.areasOfInterest}
            </Card.Text>
            {student.description !== 'NA' && (
              <Card.Text>
                <strong>Description:</strong>{' '}
                {expanded ? student.description : `${student.description.slice(0, 100)}...`}
                {student.description.length > 100 && (
                  <Button variant="link" onClick={toggleDescription}>
                    {expanded ? 'Read less' : 'Read more'}
                  </Button>
                )}
              </Card.Text>
            )}
            {student.alumni === 'Yes' && (
              <Card.Text>
                <strong>Alumni Position:</strong> {student.alumniPosition}
              </Card.Text>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Student;
