import React, { useState } from 'react';
import { Card, Col, Row} from 'react-bootstrap';
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
        <Col md={4} xs={12} className="text-center mb-3 mb-md-0 d-flex flex-column align-items-center">
          <div style={{ maxWidth: '300px', margin: 'auto' }}>
            <Card.Img src={student.image} variant="top" className="img-fluid" style={{ margin: 'auto' }}/>
            <div className="mt-3">
              <Link to={`mailto:${student.email}`} target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaEnvelope/>
              </Link>
              <Link to={student.linkedin} target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaLinkedin />
              </Link>
              <Link to={student.scholarLink} target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaGraduationCap />
              </Link>
            </div>
          </div>
        </Col>
        <Col md={8} xs={12}>
          <Card.Body className="d-flex flex-column justify-content-between h-100">
            <Card.Title>
              <strong className='project-title'>{student.name}</strong>
            </Card.Title>
            <Card.Text>
              <strong>Roll Number:</strong> {student.rollNumber}
            </Card.Text>
            <Card.Text>
              <strong>Position:</strong> {student.position}
            </Card.Text>
            {student.thesisTitle !=='NA' && (
              <Card.Text>
                <strong>Thesis Title:</strong> {student.thesisTitle}
              </Card.Text>
            )}
            <Card.Text>
              <strong>Areas of Interest:</strong> {student.areasOfInterest}
            </Card.Text>
            {student.description !== 'NA' && (
              <Card.Text>
                <strong>Description:</strong>{' '}
                {expanded ? student.description : `${student.description.slice(0, 100)}...`}
                {student.description.length > 100 && (
                  <button className="btn btn-link p-0 read-more mb-1"  onClick={toggleDescription}>
                    {expanded ? 'Read less' : 'Read more'}
                  </button>
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