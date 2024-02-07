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
        <h1>Faculty</h1>
        <Row>
            {faculty.map((faculty)=>(
                <Col key={faculty._id} sm={12} md={6} lg={4} ex={3}>
                    <Faculty faculty={faculty}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default FacultyScreen
