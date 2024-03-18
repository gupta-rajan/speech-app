import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row,Col,Button} from 'react-bootstrap';
import Student from '../components/Student';

const AlumnisScreen = () => {
  const [alumni, setAlumni] = useState([]);
  const [filter, setFilter] = useState('All'); // Default filter: All alumni
  const [showalumni, setshowalumni] = useState([]);

  useEffect(()=>{
    const fetchStudents = async()=>{
      const {data} = await axios.get('/api/people/students');
      const alumniData = data.filter(student => student.alumni === 'Yes');
      setAlumni(alumniData);
      setshowalumni(alumniData);
    }
    fetchStudents();
  },[]);

  const handleFilter = async (filterType) => {
    setFilter(filterType);
    if (filterType === 'All') {
      setshowalumni(alumni);
    } else {
      setshowalumni(alumni.filter(student => student.position === filterType && student.alumni === 'Yes'));
    }
  };

  return (
    <>
      <h1 className="my-4 text-center">Alumni</h1>
      <Row className="mb-4">
        <Col xs={12} className="text-center">
          <Button
            variant={filter === 'All' ? 'primary' : 'light'}
            className="mx-2"
            onClick={() => handleFilter('All')}
          >
            Past Students
          </Button>
          <Button
            variant={filter === 'PhD' ? 'primary' : 'light'}
            className="mx-2"
            onClick={() => handleFilter('PhD')}
          >
            Past PhD Students
          </Button>
          <Button
            variant={filter === 'MS' ? 'primary' : 'light'}
            className="mx-2"
            onClick={() => handleFilter('MS')}
          >
            Past MS Students
          </Button>
        </Col>
      </Row>
      <Row className="mb-4">
        {showalumni.map(student => (
          <Col key={student._id} xs={12}>
            <Student student={student} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default AlumnisScreen
