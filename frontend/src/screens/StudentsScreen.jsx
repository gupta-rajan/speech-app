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
      const currentStudentsData = data.filter(student => student.alumni === 'No');
      setStudents(currentStudentsData);
    }

    fetchStudents();
  },[]);

  return (
    <>
      <h1 className="my-4 text-center">Students</h1>
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
