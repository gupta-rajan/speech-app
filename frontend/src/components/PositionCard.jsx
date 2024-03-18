// Position.jsx
import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Position = ({ position }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Body>
        <Card.Title>
          <strong>{position.title}</strong>
        </Card.Title>
        <Card.Text>
          <strong>Number of Positions:</strong> {position.numberOfPositions}
        </Card.Text>
        <Card.Text>
          <strong>Essential Qualification:</strong> {position.essentialQualification}
        </Card.Text>
        <Card.Text>
          <strong>Desirable Qualification:</strong> {position.desirableQualification}
        </Card.Text>
        <Card.Text>
          <strong>Duration of Tenure:</strong> {position.durationOfTenure}
        </Card.Text>
        <Card.Text>
          <strong>Age Limit:</strong> {position.ageLimit}
        </Card.Text>
        {position.contactEmail && (
          <Card.Text>
            <strong>Contact Email:</strong>
            <Link to={`mailto:${position.contactEmail}`} target="_blank" rel="noopener noreferrer" className='mx-2'>
              {position.contactEmail}
            </Link>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default Position;