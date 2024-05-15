import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { toast } from 'react-toastify';
import { useGetStudentsQuery, useCreateStudentMutation, useDeleteStudentMutation } from '../../slices/studentsApiSlice';

const StudentListScreen = () => {
  const { data: students, isLoading, error, refetch } = useGetStudentsQuery();
  const [createStudent, { isLoading: loadingCreate }] = useCreateStudentMutation();
  const [deleteStudent, { isLoading: loadingDelete }] = useDeleteStudentMutation();

  const createStudentHandler = async () => {
    if (window.confirm("Are you sure you want to create a new student?")) {
      try {
        await createStudent();
        toast.success("Student created successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.message);
      }
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        toast.success("Student deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Students</h1>
        </Col>
        <Col className='text-end'>
          <Button className='btn-sm m-3' onClick={createStudentHandler}>
            <FaEdit /> Create Student
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
              <th>Roll Number</th>
              <th>Position</th>
              <th>Areas of Interest</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.rollNumber}</td>
                <td>{student.position}</td>
                <td>{student.areasOfInterest}</td>
                <td>
                  <LinkContainer to={`/admin/student/${student._id}/edit`}>
                    <Button variant='light' className='btn-sm mx-2'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(student._id)}
                  >
                    <FaTrash style={{ color: 'white' }} />
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

export default StudentListScreen;