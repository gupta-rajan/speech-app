import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row,Col } from 'react-bootstrap';
import Student from '../components/Student';

const AlumnisScreen = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(()=>{
    const fetchStudents = async()=>{
      const {data} = await axios.get('/api/people/students');
      const alumniData = data.filter(student => student.alumni === 'Yes');
      setAlumni(alumniData);
    }
    fetchStudents();
  },[]);

  return (
    <>
      <h1 className="my-4 text-center">Alumni</h1>
      <Row className="mb-4">
        {alumni.map(student => (
          <Col key={student._id} xs={12}>
            <Student student={student} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default AlumnisScreen
