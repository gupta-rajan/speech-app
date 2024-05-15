import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useGetStudentByIdQuery, useUpdateStudentMutation, useUploadStudentImageMutation } from '../../slices/studentsApiSlice';

const StudentEditScreen = () => {
  const navigate = useNavigate();
  const { id: studentId } = useParams(); // Get the student ID from the URL

  // State to manage form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [image, setImage] = useState('');
  const [position, setPosition] = useState('');
  const [areasOfInterest, setAreasOfInterest] = useState('');
  const [thesisTitle, setThesisTitle] = useState('');
  const [description, setDescription] = useState('');
  const [scholarLink, setScholarLink] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [alumni, setAlumni] = useState('No');
  const [alumniPosition, setAlumniPosition] = useState('');
  const [publications, setPublications] = useState('');

  // Fetch student data
  const { data: student, isLoading, error } = useGetStudentByIdQuery(studentId);
  const [updateStudent, { isLoading: loadingUpdate }] = useUpdateStudentMutation();
  const [uploadStudentImage, { isLoading: loadingUpload }] = useUploadStudentImageMutation();

  useEffect(() => {
    if (student) {
      // Initialize form fields with existing data
      setName(student.name);
      setEmail(student.email);
      setRollNumber(student.rollNumber);
      setImage(student.image || '');
      setPosition(student.position);
      setAreasOfInterest(student.areasOfInterest);
      setThesisTitle(student.thesisTitle);
      setDescription(student.description);
      setScholarLink(student.scholarLink || '');
      setLinkedin(student.linkedin || '');
      setAlumni(student.alumni);
      setAlumniPosition(student.alumniPosition || '');
      setPublications(student.publications || '');
    }
  }, [student]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedStudent = {
      studentId,
      name,
      email,
      image,
      rollNumber,
      position,
      areasOfInterest,
      thesisTitle,
      description,
      scholarLink,
      linkedin,
      alumni,
      alumniPosition,
      publications,
    };

    const result = await updateStudent({ id: studentId, ...updatedStudent });

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Student updated successfully!');
      navigate('/admin/studentList'); // Redirect back to student list
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadStudentImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Link to='/admin/studentList' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Student</h1>
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

            <Form.Group controlId="email" className="my-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="rollNumber" className="my-3">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter roll number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="position" className="my-3">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="image" className='my-2'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Form.Control type='file' label='Choose file' onChange={uploadFileHandler}></Form.Control>
            </Form.Group>

            <Form.Group controlId="areasOfInterest" className="my-3">
              <Form.Label>Areas of Interest</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter areas of interest"
                value={areasOfInterest}
                onChange={(e) => setAreasOfInterest(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="thesisTitle" className="my-3">
              <Form.Label>Thesis Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter thesis title"
                value={thesisTitle}
                onChange={(e) => setThesisTitle(e.target.value)}
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

            <Form.Group controlId="scholarLink" className="my-3">
              <Form.Label>Google Scholar Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Google Scholar link"
                value={scholarLink}
                onChange={(e) => setScholarLink(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="linkedin" className="my-3">
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter LinkedIn profile"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="alumni" className="my-3">
              <Form.Label>Alumni</Form.Label>
              <Form.Control
                as="select"
                value={alumni}
                onChange={(e) => setAlumni(e.target.value)}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="alumniPosition" className="my-3">
              <Form.Label>Alumni Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter alumni position"
                value={alumniPosition}
                onChange={(e) => setAlumniPosition(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="publications" className="my-3">
              <Form.Label>Publications</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter publications"
                value={publications}
                onChange={(e) => setPublications(e.target.value)}
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

export default StudentEditScreen;