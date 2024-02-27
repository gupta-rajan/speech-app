import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row,Col } from 'react-bootstrap';
// import faculty from '../faculty'
import Faculty from '../components/Faculty'

const FacultyScreen = () => {

  const [faculty, setfaculty] = useState([]);

  useEffect(()=>{
    const fetchFaculty = async()=>{
      const {data} = await axios.get('/api/people/faculty');
      setfaculty(data);
    }

    fetchFaculty();
  },[]);

  return (
    <>
        <h1 className="my-4 text-center">Faculty</h1>
        {faculty.map((facultyMember) => (
        <Row key={facultyMember._id} className="mb-4">
          <Col xs={12}>
            <Faculty faculty={facultyMember} />
          </Col>
        </Row>
      ))}
    </>
  )
}


export default FacultyScreen
