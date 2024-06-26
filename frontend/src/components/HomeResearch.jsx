import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeResearch = ({ research }) => {
  // Function to find the first available image path
  const findImagePath = (images) => {
    if (images && images.length > 0) {
      for (const image of images) {
        if (image.imagePath) {
          return image.imagePath;
        }
      }
    }
    return ''; // Return empty string if no image path is found
  };

  // Get the first available image path
  const imagePath = findImagePath(research.images);

  return (
    <Col>
      <LinkContainer to={`/research/${research._id}`}>
        <Card className="my-3 p-3 rounded">
          <div style={{ maxHeight: '300px', margin: 'auto' }}>
            <Card.Img src={imagePath} variant="top" className="img-fluid" style={{ margin: 'auto', height: '12rem' }} />
          </div>
          <div className="mt-3 text-center" style={{ height: '1rem', width: '100%' }}>
            <h5 style={{ fontSize: '1rem' }}>{research.title}</h5>
          </div>
        </Card>
      </LinkContainer>
    </Col>
  );
};

export default HomeResearch;
