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
        <h1>Students</h1>
        <Row>
            {students.map((student)=>(
                <Col key={student._id} sm={12} md={6} lg={4} ex={3}>
                    <Student student={student}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default StudentsScreen
