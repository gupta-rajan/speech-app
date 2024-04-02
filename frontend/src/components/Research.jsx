import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Research = ({ research }) => {
  if (!research || !research.content) {
    return null; // Return null if research or research.content is undefined
  }

  return (
    <Container>
      <div className="my-3 p-3 rounded border">
        <Row className="my-2">
          <Col md={12} className="text-center">
            <h1>{research.title}</h1>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md={6}>
            <div className="content">
              {research.content.map((item, index) => (
                <div key={index}>
                  {typeof item === 'object' ? (
                    Object.entries(item).map(([key, value]) => (
                      <Card key={key} className="mb-3">
                        <Card.Header className="text-center">{key}</Card.Header>
                        <Card.Body className="text-center">
                          {value.map((subItem, subIndex) => (
                            <Card.Text key={subIndex}>{subItem}</Card.Text>
                          ))}
                        </Card.Body>
                      </Card>
                    ))
                  ) : (
                    <Card className="mb-3">
                      <Card.Body className="text-center">
                        <div>{item}</div>
                      </Card.Body>
                    </Card>
                  )}
                </div>
              ))}
            </div>
          </Col>
          <Col md={6} className="text-center d-flex flex-column justify-content-center align-items-center">
            <div>
              <img src={research.imagePath} alt={research.title} className="img-fluid" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Research;