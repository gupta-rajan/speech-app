import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { toast } from 'react-toastify';
import { useGetPositionsQuery, useCreatePositionMutation, useDeletePositionMutation } from '../../slices/positionsApiSlice';

const PositionListScreen = () => {
  const { data: positions, isLoading, error, refetch } = useGetPositionsQuery();

  const [createPosition, { isLoading: loadingCreate }] = useCreatePositionMutation();
  const [deletePosition, { isLoading: loadingDelete }] = useDeletePositionMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      try {
        await deletePosition(id);
        toast.success("Position deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const createPositionHandler = async () => {
    if (window.confirm("Are you sure you want to create a new position?")) {
      try {
        await createPosition();
        toast.success("Position created successfully");
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
          <h1>Positions</h1>
        </Col>
        <Col className='text-end'>
          <Button className='btn-sm m-3' onClick={createPositionHandler}>
            <FaEdit /> Create Position
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
              <th>Title</th>
              <th>Number of Positions</th>
              <th>Essential Qualification</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position) => (
              <tr key={position._id}>
                <td>{position.title}</td>
                <td>{position.numberOfPositions}</td>
                <td>{position.essentialQualification}</td>
                <td>
                  <LinkContainer to={`/admin/position/${position._id}/edit`}>
                    <Button variant='light' className='btn-sm mx-2'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(position._id)}
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

export default PositionListScreen;
