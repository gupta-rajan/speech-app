import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row,Col } from 'react-bootstrap';
import Student from '../components/Student';

const StudentsScreen = () => {
  const [students, setStudents] = useState([]);
  const [alumni, setAlumni] = useState([]);

  useEffect(()=>{
    const fetchStudents = async()=>{
      const {data} = await axios.get('/api/people/students');
      const currentStudentsData = data.filter(student => student.alumni === 'No');
      const alumniData = data.filter(student => student.alumni === 'Yes');
      setStudents(currentStudentsData);
      setAlumni(alumniData);
    }

    fetchStudents();
  },[]);

  return (
    <>
      <h1 className="my-4 text-center">Students</h1>
      <h2>Alumni</h2>
      <Row className="mb-4">
        {alumni.map(student => (
          <Col key={student._id} xs={12}>
            <Student student={student} />
          </Col>
        ))}
      </Row>
      <h2>Current Students</h2>
      <Row className="mb-4">
        {students.map(student => (
          <Col key={student._id} xs={12}>
            <Student student={student} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default StudentsScreen
