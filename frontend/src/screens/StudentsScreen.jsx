import React, { useEffect, useState } from 'react';
import { useGetStudentsQuery } from '../slices/studentsApiSlice';
import { Row, Col, Button } from 'react-bootstrap';
import Student from '../components/Student';
import Loader from '../components/Loader';
import Message from '../components/Message';

const StudentsScreen = () => {
  const {data: students,isLoading,error} = useGetStudentsQuery();
  const [filter, setFilter] = useState('All'); // Default filter: All students
  const [showStudents, setShowStudents] = useState([]);

  useEffect(() => {
    if (students) {
      const activeStudents = students.filter(student => student.alumni === 'No');
      setShowStudents(activeStudents);
    }
  }, [students]);

  const handleFilter = async (filterType) => {
    setFilter(filterType);
    if (filterType === 'All') {
      setShowStudents(students);
    } else {
      // Filter students based on position
      setShowStudents(students.filter(student => student.position === filterType && student.alumni === 'No'));
    }
  };

  return (
    <>
      {isLoading? (
        <Loader />
      ): error? (<Message variant='danger'>{error?.data?.message || error.error}</Message>):
      (<>
        <h1 className="my-4 text-center">Students</h1>
        <Row className="mb-4">
          <Col xs={12} className="d-flex justify-content-center">
            <Button
              variant={filter === 'All' ? 'primary' : 'light'}
              className="flex-grow-1 mx-1"
              onClick={() => handleFilter('All')}
            >
              Students
            </Button>
            <Button
              variant={filter === 'PhD' ? 'primary' : 'light'}
              className="flex-grow-1 mx-1"
              onClick={() => handleFilter('PhD')}
            >
             PhD Students
            </Button>
            <Button
              variant={filter === 'MS' ? 'primary' : 'light'}
              className="flex-grow-1 mx-1"
              onClick={() => handleFilter('MS')}
            >
              MS Students
            </Button>
            <Button
              variant={filter === 'MTech' ? 'primary' : 'light'}
              className="flex-grow-1 mx-1"
              onClick={() => handleFilter('MTech')}
            >
              MTech Students
            </Button>
          </Col>
        </Row>
        <Row className="mb-4">
          {showStudents.map(student => (
            <Col key={student._id} xs={12}>
              <Student student={student} />
            </Col>
          ))}
        </Row>
      </>)}
    </>
  );
};

export default StudentsScreen;
