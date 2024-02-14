import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row,Col } from 'react-bootstrap';
import Student from '../components/Student';

const StudentsScreen = () => {
  const [students, setStudents] = useState([]);

  useEffect(()=>{
    const fetchStudents = async()=>{
      const {data} = await axios.get('/api/people/students');
      setStudents(data);
    }

    fetchStudents();
  },[]);

  return (
    <>
      <h1 className="my-4">Students</h1>
      {students.map((student) => (
      <Row key={student._id} className="mb-4">
        <Col xs={12}>
          <Student student={student} />
        </Col>
      </Row>
      ))}
    </>
  )
}

export default StudentsScreen
