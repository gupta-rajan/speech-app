// PositionsScreen.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import PositionCard from '../components/PositionCard'; // Create PositionCard component for position details

const PositionsScreen = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
        const { data } = await axios.get('/api/positions'); // Assuming you have an API endpoint for positions
        setPositions(data);
    };

    fetchPositions();
  }, []);

  return (
    <Container>
      <h1 className="my-4 text-center">Positions</h1>
      <Row>
        {positions.map((position) => (
          <Col key={position._id} md={12} lg={12}>
            <PositionCard position={position} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PositionsScreen;