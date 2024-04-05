import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const renderContent = (content) => {
  return content.map((item, index) => {
    if (typeof item === 'object') {
      return Object.entries(item).map(([key, value]) => (
        <div key={key}>
          <Card className="mb-3">
            <Card.Header className="text-center">{key}</Card.Header>
            <Card.Body className="text-center">
              {Array.isArray(value) ? (
                value.map((subItem, subIndex) => (
                  <Card.Text key={subIndex}>{subItem}</Card.Text>
                ))
              ) : (
                renderContent([value]) // Render nested object as array
              )}
            </Card.Body>
          </Card>
        </div>
      ));
    } else {
      return (
        <Card className="mb-3" key={index}>
          <Card.Body className="text-center">
            <div>{item}</div>
          </Card.Body>
        </Card>
      );
    }
  });
};

const Research = ({ research }) => {
  if (!research || !research.images) {
    return null; // Return null if research or research.images is undefined
  }

  return (
    <Container>
      <div className="my-3 p-3 rounded border">
        <Row className="my-2">
          <Col md={12} className="text-center">
            <h1>{research.title}</h1>
          </Col>
        </Row>
        {research.images.map((image, index) => (
          <Row key={index} className="my-5 align-items-center justify-content-center"> {/* Added justify-content-center to horizontally center the content */}
            {image.imagePath ? (
              <Row className='my-3 p-3 rounded border'>
                <Col md={6} className="d-flex justify-content-center text-center d-flex align-items-center"> {/* Center the content horizontally */}
                  <div className="content">
                    {renderContent(image.content)}
                  </div>
                </Col>
                <Col md={6} className="d-flex justify-content-center text-center d-flex align-items-center"> {/* Center the image vertically */}
                  <div>
                    <img src={image.imagePath} alt={research.title} className="img-fluid" />
                  </div>
                </Col>
              </Row>
            ) : (
              <Col md={12}>
                <div className="content">
                  {renderContent(image.content)}
                </div>
              </Col>
            )}
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default Research;