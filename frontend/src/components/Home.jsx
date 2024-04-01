import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="my-3 p-3 rounded border">
      <Row>
        <Col>
          <h1 className='text-center mb-4'>Home</h1>
          <div className="text-center">
            <p>
              SITAR group is a collection of innovative labs focused on Speech, Image, Text, and Artificial Intelligence Research, hence the name SITAR. Each lab, having a specific specialization, works dynamically in collaboration with the other labs to develop cutting-edge technologies for the nation.
            </p>
          </div>
          <div className="mb-4">
            <h2 className='text-center'>Vision</h2>
            <p>
              To be a global leader in Artificial Intelligence and Data Science research by addressing real-world challenges.
            </p>
          </div>
          <div className="mb-4">
            <h2 className='text-center'>Mission</h2>
            <p>
              To carry out cutting-edge research in speech, image, vision, and text applications using AI/ML and Data Science.
            </p>
            <p>
              To establish industrial and academia collaborations with national and international researchers.
            </p>
            <p>
              To carry out translational research in SITAR for industrial and societal applications.
            </p>
            <p>
              To execute projects of national and international importance in relevant areas.
            </p>
            <p>
              To develop competency and skill-set in relevant areas.
            </p>
          </div>
          <div>
            <h2 className='text-center'>Objectives</h2>
            <div>
              <p>To set laboratories with state-of-the-art facilities in areas related to SITAR.</p>
              <p>End-to-end solutions to real-world issues through the use of technology.</p>
              <p>To secure externally funded projects in SITAR.</p>
              <p>To create a manpower pool of students, researchers, and project staff working in SITAR.</p>
              <p>To publish research articles in reputed venues.</p>
              <p>To create resources for research and development in SITAR areas & organize challenges.</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
