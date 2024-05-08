import React from 'react'
import { useEffect, useState } from 'react';
import { useGetStudentsQuery } from '../slices/studentsApiSlice';
import { Row,Col,Button} from 'react-bootstrap';
import Student from '../components/Student';
import Loader from '../components/Loader';
import Message from '../components/Message';

const AlumnisScreen = () => {
  const {data: alumni,isLoading,error} = useGetStudentsQuery();
  const [filter, setFilter] = useState('All'); // Default filter: All alumni
  const [showalumni, setshowalumni] = useState([]);

  useEffect(()=>{
    if(alumni){
      const alumniData = alumni.filter(student => student.alumni === 'Yes');
      setshowalumni(alumniData);
    }
  },[alumni]);

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
      {isLoading? (
        <Loader />
      ): error? (<Message variant='danger'>{error?.data?.message || error.error}</Message>):
      (<>
        <h1 className="my-4 text-center">Alumni</h1>
        <Row className="mb-4">
          <Col xs={12} className="d-flex justify-content-center">
            <Button
              variant={filter === 'All' ? 'primary' : 'light'}
              className="flex-grow-1 mx-1"
              onClick={() => handleFilter('All')}
            >
              Past Students
            </Button>
            <Button
              variant={filter === 'PhD' ? 'primary' : 'light'}
              className="flex-grow-1 mx-1"
              onClick={() => handleFilter('PhD')}
            >
              Past PhD Students
            </Button>
            <Button
              variant={filter === 'MS' ? 'primary' : 'light'}
              className="flex-grow-1 mx-1"
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
      </>)}
    </>
  )
}

export default AlumnisScreen
