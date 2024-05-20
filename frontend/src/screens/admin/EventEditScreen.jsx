import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col, Image } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useGetEventByIdQuery, useUpdateEventMutation, useUploadEventImageMutation } from '../../slices/eventsApiSlice';

const EventEditScreen = () => {
  const navigate = useNavigate();
  const { id: eventId } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [dates, setDates] = useState('');
  const [images, setImages] = useState([]);

  const { data: event, isLoading, error } = useGetEventByIdQuery(eventId);
  const [updateEvent, { isLoading: loadingUpdate }] = useUpdateEventMutation();
  const [uploadEventImage, { isLoading: loadingUpload }] = useUploadEventImageMutation();

  useEffect(() => {
    if (event) {
      setName(event.name);
      setDescription(event.description);
      setWebsite(event.website || '');
      setDates(event.dates);
      setImages(event.images || []);
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
      images,
    };

    const result = await updateEvent({ id: eventId, ...updatedEvent });

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Event updated successfully!');
      navigate('/admin/eventList');
    }
  };

  const uploadFileHandler = async (e) => {
    const files = Array.from(e.target.files);
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('images', file); // Use 'images' to match backend
    });

    try {
      const res = await uploadEventImage(formData).unwrap();
      toast.success('Images uploaded successfully');
      setImages((prevImages) => [...prevImages, ...res.images]);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const removeImageHandler = (imageUrl) => {
    setImages(images.filter((img) => img !== imageUrl));
  };

  return (
    <>
      <Link to='/admin/eventList' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Event</h1>
        {isLoading || loadingUpdate || loadingUpload ? (
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

            <Form.Group controlId="images" className='my-2'>
              <Form.Label>Upload Images</Form.Label>
              <Form.Control type='file' multiple onChange={uploadFileHandler} />
            </Form.Group>

            <Row>
              {images.map((img) => (
                <Col key={img} xs={12} md={3} className='my-2'>
                  <Image src={img} alt='event' fluid rounded />
                  <Button
                    variant='danger'
                    className='btn-sm mt-2'
                    onClick={() => removeImageHandler(img)}
                  >
                    Remove
                  </Button>
                </Col>
              ))}
            </Row>

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