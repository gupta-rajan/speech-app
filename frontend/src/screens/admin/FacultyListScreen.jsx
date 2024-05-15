import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import {toast} from 'react-toastify';
import { useGetFacultyQuery, useCreateFacultyMutation, useDeleteFacultyMutation } from '../../slices/facultyApiSlice';

const FacultyListScreen = () => {
  const { data: faculty, isLoading, error,refetch } = useGetFacultyQuery();

  const [createFaculty,{isLoading: loadingCreate}] = useCreateFacultyMutation();

  const [deleteFaculty, {isLoading: loadingDelete}] = useDeleteFacultyMutation();

  const deleteHandler = async (id) => {
    if(window.confirm('Are you sure want to delete?')){
      try {
        await deleteFaculty(id);
        toast.success("Faculty deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const createFacultyHandler = async () => {
    if (window.confirm("Are you sure you want to create a new faculty?")) {
      try {
        await createFaculty(); 
        toast.success("Faculty created successfully");
        refetch(); 
      } catch (err) {
        toast.error(err?.data?.message || err.message);
      }
    }
  };



  return (
    <>
        <Row className="align-items-center">
          <Col>
              <h1>Faculty</h1>
          </Col>
          <Col className='text-end'>
              <Button className='btn-sm m-3' onClick={createFacultyHandler}>
              <FaEdit />Create Faculty
              </Button>
          </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faculty.map((member) => (
              <tr key={member._id}>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.department}</td>
                <td>
                  <LinkContainer to={`/admin/faculty/${member._id}/edit`}>
                    <Button variant='light' className='btn-sm mx-2'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(member._id)}
                  >
                    <FaTrash style={{color: 'white'}}/>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default FacultyListScreen;