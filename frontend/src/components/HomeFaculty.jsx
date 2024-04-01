import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeFaculty = ({ faculty }) => {
  return (
    <Col>
      <LinkContainer to="/people/faculty">
        <Card className="my-3 p-3 rounded">
        <div>
            <div style={{ maxHeight: '300px', margin: 'auto'  }}>
                <Card.Img src={faculty.image} variant="top" className="img-fluid" style={{ margin: 'auto', height:'12rem'}}  />
            </div>
            <div className="mt-3 text-center" style={{ height: '1rem', width: '100%' }}>
                <h5 style={{fontSize: '1rem'}}>{faculty.name}</h5>
            </div>
            <div className="mt-3 text-center" style={{ height: '1rem', width: '100%' }}>
                <p style={{fontSize: '0.9rem'}}><strong>Department:</strong> {faculty.department}</p>
            </div>
        </div>
        </Card>
      </LinkContainer>
    </Col>
  );
};

export default HomeFaculty;
