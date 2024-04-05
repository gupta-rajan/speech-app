import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeFaculty = ({ faculty }) => {
  return (
    <Col>
      <Card className="my-3 p-3 rounded">
        <div>
          <div className="text-center">
            <Link to={`/people/faculty#${faculty._id}`}>
              <Card.Img
                src={faculty.image}
                variant="top"
                className="img-fluid"
                style={{ maxHeight: '300px', maxWidth: '100%', margin: 'auto' }}
              />
            </Link>
          </div>
          <div className="mt-3 text-center" style={{ height: '1rem', width: '100%' }}>
            <h5 style={{ fontSize: '1rem' }}>{faculty.name}</h5>
          </div>
          <div className="mt-3 text-center" style={{ height: '1rem', width: '100%' }}>
            <p style={{ fontSize: '0.9rem' }}>
              <strong>Department:</strong> {faculty.department}
            </p>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default HomeFaculty;
