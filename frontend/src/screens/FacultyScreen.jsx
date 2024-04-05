import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Faculty from '../components/Faculty';

const FacultyScreen = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      const { data } = await axios.get('/api/people/faculty');
      setFaculty(data);
    };

    fetchFaculty();
  }, []);

  useEffect(() => {
    // Extract the hash from the URL
    const hash = window.location.hash;
    // Check if a hash is present
    if (hash) {
      // Extract the faculty ID from the hash (remove the leading #)
      const facultyId = hash.substring(1);
      // Scroll to the element with the matching ID
      const element = document.getElementById(facultyId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [faculty]); // Scroll whenever faculty data changes

  return (
    <>
      <h1 className="my-4 text-center">Faculty</h1>
      {faculty.map((facultyMember) => (
        <Row key={facultyMember._id} id={facultyMember._id} className="mb-4">
          <Col xs={12}>
            <Faculty faculty={facultyMember} />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default FacultyScreen;
