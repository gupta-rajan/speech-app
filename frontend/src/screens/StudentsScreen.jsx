import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Button } from 'react-bootstrap';
import Student from '../components/Student';

const StudentsScreen = () => {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState('All'); // Default filter: All students

  useEffect(() => {
    const fetchStudents = async () => {
      const { data } = await axios.get('/api/people/students');
      setStudents(data.filter(student => student.alumni === 'No'));
    };

    fetchStudents();
  }, []);

  const handleFilter = async (filterType) => {
    setFilter(filterType);
    if (filterType === 'All') {
      const { data } = await axios.get('/api/people/students');
      setStudents(data.filter(student => student.alumni === 'No'));
    } else {
      // Filter students based on position
      const { data } = await axios.get('/api/people/students');
      setStudents(data.filter(student => student.position === filterType && student.alumni === 'No'));
    }
  };

  return (
    <>
      <h1 className="my-4 text-center">Students</h1>
      <Row className="mb-4">
        <Col xs={12} className="text-center">
          <Button
            variant={filter === 'All' ? 'primary' : 'light'}
            className="mx-2"
            onClick={() => handleFilter('All')}
          >
            All Students
          </Button>
          <Button
            variant={filter === 'PhD' ? 'primary' : 'light'}
            className="mx-2"
            onClick={() => handleFilter('PhD')}
          >
            PhD
          </Button>
          <Button
            variant={filter === 'MS' ? 'primary' : 'light'}
            className="mx-2"
            onClick={() => handleFilter('MS')}
          >
            MS
          </Button>
          <Button
            variant={filter === 'MTech' ? 'primary' : 'light'}
            className="mx-2"
            onClick={() => handleFilter('MTech')}
          >
            MTech
          </Button>
        </Col>
      </Row>
      <Row className="mb-4">
        {students.map(student => (
          <Col key={student._id} xs={12}>
            <Student student={student} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default StudentsScreen;
