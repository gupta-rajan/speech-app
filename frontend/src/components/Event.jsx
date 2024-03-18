import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = ({ event }) => {
  return (
    <Row className="border-bottom py-3">
      <Col>
        <p><strong>{event.name}</strong></p>
        {event.website && (<p><strong>Website:</strong><Link to={event.website} target="_blank" rel="noopener noreferrer" className='mx-2'>{event.website}</Link></p>)}
        <p><strong>Dates:</strong> {event.dates}</p>
      </Col>
    </Row>
  );
};

export default Event;