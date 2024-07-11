import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DemoCard from '../components/DemoCard';

const DemoScreen = () => {
    return (
        <Container>
            <h1 className="text-center mb-4">Demos</h1>
            <Row>
                <Col xs={12} md={6} lg={4} className="d-flex align-items-stretch">
                    <DemoCard title="FSD" path="/demo/fsd" content="Fake Speech Detection" />
                </Col>
                <Col xs={12} md={6} lg={4} className="d-flex align-items-stretch">
                    <DemoCard title="MT" path="/demo/mt" content="Machine Translation" />
                </Col>
                {/* Add more DemoCard components for other demos */}
            </Row>
        </Container>
    );
};

export default DemoScreen;