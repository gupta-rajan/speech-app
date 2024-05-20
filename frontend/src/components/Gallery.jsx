import { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { useGetEventsQuery } from '../../slices/eventsApiSlice';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const Gallery = () => {
  const { data: events, isLoading, error } = useGetEventsQuery();

  return (
    <Container>
      <h1>Event Gallery</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.message}</Message>
      ) : (
        <Row>
          {events.map((event) => (
            <Col key={event._id} sm={12} md={6} lg={4}>
              <h3>{event.name}</h3>
              <Carousel>
                {event.images && event.images.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`Slide ${idx + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Gallery;