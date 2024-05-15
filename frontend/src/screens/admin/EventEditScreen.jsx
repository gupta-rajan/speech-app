import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useGetEventByIdQuery, useUpdateEventMutation } from '../../slices/eventsApiSlice';

const EventEditScreen = () => {
  const navigate = useNavigate();
  const { id: eventId } = useParams(); // Get the event ID from the URL

  // State to manage form fields
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [dates, setDates] = useState('');

  // Fetch event data
  const { data: event, isLoading, error } = useGetEventByIdQuery(eventId);
  const [updateEvent, { isLoading: loadingUpdate }] = useUpdateEventMutation();

  useEffect(() => {
    if (event) {
      // Initialize form fields with existing data
      setName(event.name);
      setDescription(event.description);
      setWebsite(event.website || '');
      setDates(event.dates);
    }
  }, [event]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedEvent = {
      eventId,
      name,
      description,
      website,
      dates,
    };

    const result = await updateEvent({ id: eventId, ...updatedEvent });

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Event updated successfully!');
      navigate('/admin/eventList'); // Redirect back to event list
    }
  };

  return (
    <>
      <Link to='/admin/eventList' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Event</h1>
        {isLoading || loadingUpdate ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error?.data?.message || error.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="my-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="description" className="my-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="website" className="my-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type='text'
                placeholder="Enter website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="dates" className="my-3">
              <Form.Label>Dates</Form.Label>
              <Form.Control
                type='text'
                placeholder="Enter dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="mt-2">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default EventEditScreen;