import React, { useEffect} from 'react';
import { useGetFacultyQuery } from '../slices/facultyApiSlice';
import { Row, Col } from 'react-bootstrap';
import Faculty from '../components/Faculty';
import Loader from '../components/Loader';
import Message from '../components/Message';

const FacultyScreen = () => {
  const { data: faculty, isLoading, error } = useGetFacultyQuery();

  useEffect(() => {
    // Scroll to the relevant faculty member based on the URL hash
    const hash = window.location.hash;
    if (hash && faculty) {
      const facultyId = hash.substring(1); // Remove the leading #
      const element = document.getElementById(facultyId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [faculty]); // Run this effect when the faculty data changes

  return (
    <>
      {isLoading? (
        <Loader />
      ): error? (<Message variant='danger'>{error?.data?.message || error.error}</Message>):
      (<>
        <h1 className="my-4 text-center">Faculty</h1>
        {faculty.map((facultyMember) => (
          <Row key={facultyMember._id} id={facultyMember._id} className="mb-4">
            <Col xs={12}>
              <Faculty faculty={facultyMember} />
            </Col>
          </Row>
        ))}
      </>)}
    </>
  );
};

export default FacultyScreen;
