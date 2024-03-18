import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="my-3 p-3 rounded border">
      <Row>
        <Col>
          <h1 className='text-center'>Home</h1>
          <p>
            SITAR group is a collection of innovative labs focused on Speech, Image, Text, and Artificial Intelligence Research, hence the name SITAR. Each lab, having a specific specialization, works dynamically in collaboration with the other labs to develop cutting-edge technologies for the nation.
          </p>
          <br></br>
          <h2 className='text-center'>Research activities</h2>
          <Row className='mb-1'>
            <Col md={4}>
              <div className="border rounded p-1">
                <h5 className='text-center pt-3'>Automatic Speech Recognition</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="border rounded p-1">
                <h5 className='text-center pt-3'>Text-to-Speech</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="border rounded p-1">
                <h5 className='text-center pt-3'> Automatic Speaker Verification</h5>
              </div>
            </Col>
          </Row>
          <Row className='mb-1'>
            <Col md={4}>
              <div className="border rounded p-1">
                <h5 className='text-center pt-3'>Speech to Speech Translation</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="border rounded p-1">
                <h5 className='text-center pt-3'>Speaker and Language Diarization</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="border rounded p-1">
                <h5 className='text-center pt-3'>Machine Translation</h5>
              </div>
            </Col>
          </Row>
          <Row className='mb-1'>
            <Col md={4}>
              <div className="border rounded p-1">
                <h5 className='text-center pt-3'>Fake Speech Detection</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="border rounded p-1">
                <h5 className='text-center pt-3'>Depression Analysis</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="border rounded p-1">
                <h5 className='text-center pt-3'>Trustworthiness in speech</h5>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
