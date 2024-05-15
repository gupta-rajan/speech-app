import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useGetPositionByIdQuery, useUpdatePositionMutation } from '../../slices/positionsApiSlice';

const PositionEditScreen = () => {
  const navigate = useNavigate();
  const { id: positionId } = useParams(); // Get the position ID from the URL

  // State to manage form fields
  const [title, setTitle] = useState('');
  const [numberOfPositions, setNumberOfPositions] = useState(1);
  const [essentialQualification, setEssentialQualification] = useState('');
  const [desirableQualification, setDesirableQualification] = useState('');
  const [durationOfTenure, setDurationOfTenure] = useState('');
  const [ageLimit, setAgeLimit] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  // Fetch position data
  const { data: position, isLoading, error } = useGetPositionByIdQuery(positionId);
  const [updatePosition, { isLoading: loadingUpdate }] = useUpdatePositionMutation();

  useEffect(() => {
    if (position) {
      // Initialize form fields with existing data
      setTitle(position.title);
      setNumberOfPositions(position.numberOfPositions);
      setEssentialQualification(position.essentialQualification);
      setDesirableQualification(position.desirableQualification || '');
      setDurationOfTenure(position.durationOfTenure || '');
      setAgeLimit(position.ageLimit || '');
      setContactEmail(position.contactEmail || '');
    }
  }, [position]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedPosition = {
      positionId,
      title,
      numberOfPositions,
      essentialQualification,
      desirableQualification,
      durationOfTenure,
      ageLimit,
      contactEmail,
    };

    const result = await updatePosition({ id: positionId, ...updatedPosition });

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Position updated successfully!');
      navigate('/admin/positionList'); // Redirect back to position list
    }
  };

  return (
    <>
      <Link to='/admin/positionList' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Position</h1>
        {isLoading || loadingUpdate ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error?.data?.message || error.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="title" className="my-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="numberOfPositions" className="my-3">
              <Form.Label>Number of Positions</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number of positions"
                value={numberOfPositions}
                onChange={(e) => setNumberOfPositions(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="essentialQualification" className="my-3">
              <Form.Label>Essential Qualification</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter essential qualification"
                value={essentialQualification}
                onChange={(e) => setEssentialQualification(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="desirableQualification" className="my-3">
              <Form.Label>Desirable Qualification</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter desirable qualification"
                value={desirableQualification}
                onChange={(e) => setDesirableQualification(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="durationOfTenure" className="my-3">
              <Form.Label>Duration of Tenure</Form.Label>
              <Form.Control
                type='text'
                placeholder="Enter duration of tenure"
                value={durationOfTenure}
                onChange={(e) => setDurationOfTenure(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="ageLimit" className="my-3">
              <Form.Label>Age Limit</Form.Label>
              <Form.Control
                type='text'
                placeholder="Enter age limit"
                value={ageLimit}
                onChange={(e) => setAgeLimit(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="contactEmail" className="my-3">
              <Form.Label>Contact Email</Form.Label>
              <Form.Control
                type='email'
                placeholder="Enter contact email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
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

export default PositionEditScreen;
