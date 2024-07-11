import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DemoCard = ({ title, path, content }) => {
  return (
    <Card className='my-3 p-0 rounded' style={{ height: '100%', minWidth: '100%' }}>
      <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card.Body className="d-flex flex-column justify-content-between p-0">
          <div className="p-3 rounded-top text-center" style={{ backgroundColor: '#007bff', color: '#fff', fontSize: '2rem' }}>
            <strong className='d-block'>{title}</strong>
          </div>
          <div className="p-3 text-center" style={{ backgroundColor: '#f9f9f9', fontSize: '1.5rem', flex: 1 }}>
            <p>{content}</p>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default DemoCard;