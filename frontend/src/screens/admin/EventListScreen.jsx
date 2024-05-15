import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { toast } from 'react-toastify';
import { useGetEventsQuery, useCreateEventMutation, useDeleteEventMutation } from '../../slices/eventsApiSlice';

const EventListScreen = () => {
  const { data: events, isLoading, error, refetch } = useGetEventsQuery();

  const [createEvent, { isLoading: loadingCreate }] = useCreateEventMutation();
  const [deleteEvent, { isLoading: loadingDelete }] = useDeleteEventMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      try {
        await deleteEvent(id);
        toast.success("Event deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const createEventHandler = async () => {
    if (window.confirm("Are you sure you want to create a new event?")) {
      try {
        await createEvent();
        toast.success("Event created successfully");
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
          <h1>Events</h1>
        </Col>
        <Col className='text-end'>
          <Button className='btn-sm m-3' onClick={createEventHandler}>
            <FaEdit /> Create Event
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
              <th>Description</th>
              <th>Website</th>
              <th>Dates</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id}>
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.website}</td>
                <td>{event.dates}</td>
                <td>
                  <LinkContainer to={`/admin/event/${event._id}/edit`}>
                    <Button variant='light' className='btn-sm mx-2'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(event._id)}
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

export default EventListScreen;