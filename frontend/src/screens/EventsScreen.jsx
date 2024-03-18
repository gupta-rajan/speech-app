import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Event from '../components/Event';

const EventsScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
        const { data } = await axios.get('/api/events');
        setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <div className="my-4">
      <h1 className="text-center mb-4">Events</h1>
      <Row>
        {events.map((event) => (
          <Col key={event._id} lg={12}>
            <Event event={event} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EventsScreen;
