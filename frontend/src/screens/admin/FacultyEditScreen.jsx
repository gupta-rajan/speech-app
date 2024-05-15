import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useGetFacultyByIdQuery, useUpdateFacultyMutation, useUploadFacultyImageMutation } from '../../slices/facultyApiSlice';

const FacultyEditScreen = () => {
  const navigate = useNavigate();
  const { id: facultyId } = useParams(); // Get the faculty ID from the URL
 
  // State to manage form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [personalWeb, setPersonalWeb] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [scholarLink, setScholarLink] = useState('');
  const [officeAddress, setOfficeAddress] = useState('');
  const [labAddress, setLabAddress] = useState('');
  const [publications, setPublications] = useState('');
  const [phdStudents, setPhdStudents] = useState([]);
  const [msStudents, setMsStudents] = useState([]);
  const [mtechStudents, setMtechStudents] = useState([]);
  const [btechStudents, setBtechStudents] = useState([]);

  // Fetch faculty data
  const { data: faculty, isLoading, error } = useGetFacultyByIdQuery(facultyId);
  const [updateFaculty, { isLoading: loadingUpdate }] = useUpdateFacultyMutation();

  const [uploadFacultyImage, {isLoading: loadingUpload}] = useUploadFacultyImageMutation(); 

  useEffect(() => {
    if (faculty) {
      // Initialize form fields with existing data
      setName(faculty.name);
      setEmail(faculty.email);
      setDepartment(faculty.department);
      setImage(faculty.image || '');
      setBio(faculty.bio || '');
      setAreaOfInterest(faculty.areaOfInterest || '');
      setPersonalWeb(faculty.personalWeb || '');
      setLinkedin(faculty.linkedin || '');
      setScholarLink(faculty.scholarLink || '');
      setOfficeAddress(faculty.officeAddress || '');
      setLabAddress(faculty.labAddress || '');
      setPublications(faculty.publications || '');
      setPhdStudents(faculty.phdStudents || []);
      setMsStudents(faculty.msStudents || []);
      setMtechStudents(faculty.mtechStudents || []);
      setBtechStudents(faculty.btechStudents || []);
    }
  }, [faculty]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedFaculty = {
      facultyId,
      name,
      email,
      image,
      department,
      bio,
      areaOfInterest,
      personalWeb,
      linkedin,
      scholarLink,
      officeAddress,
      labAddress,
      publications,
      phdStudents,
      msStudents,
      mtechStudents,
      btechStudents,
    };

    console.log("i am in");
    const result = await updateFaculty({ id: facultyId, ...updatedFaculty });
    console.log('i am out',result);

    if(result.error){
        toast.error(result.error);
    }
    else{
        toast.success('Faculty updated successfully!');
        navigate('/admin/facultyList'); // Redirect back to faculty list
    }
  }; 

  const uploadFileHandler = async(e)=>{
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    console.log(formData);
    try {
      const res= await uploadFacultyImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    }
    catch (err){
      toast.error(err?.data?.message || err.error);
    }
  }

  return <>
    <Link to='/admin/facultyList' className='btn btn-light my-3'>
        Go Back
    </Link>
    <FormContainer>
      <h1>Edit Faculty</h1>
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

          <Form.Group controlId="department" className="my-3">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="image" className='my-2'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage}
            />

            <Form.Control type='file' label='Choose file' onChange={uploadFileHandler}>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="bio" className="my-3">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="areaOfInterest" className="my-3">
            <Form.Label>Area of Interest</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter area of interest"
              value={areaOfInterest}
              onChange={(e) => setAreaOfInterest(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="personalWeb" className="my-3">
            <Form.Label>Personal Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter personal website"
              value={personalWeb}
              onChange={(e) => setPersonalWeb(e.target.value)}
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

          <Form.Group controlId="scholarLink" className="my-3">
            <Form.Label>Google Scholar Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Google Scholar link"
              value={scholarLink}
              onChange={(e) => setScholarLink(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="officeAddress" className="my-3">
            <Form.Label>Office Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter office address"
              value={officeAddress}
              onChange={(e) => setOfficeAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="labAddress" className="my-3">
            <Form.Label>Lab Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lab address"
              value={labAddress}
              onChange={(e) => setLabAddress(e.target.value)}
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

          <Form.Group controlId="phdStudents" className="my-3">
            <Form.Label>PhD Students</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter PhD students (comma-separated)"
              value={phdStudents.join(',')}
              onChange={(e) => setPhdStudents(e.target.value.split(','))}
            />
          </Form.Group>

          <Form.Group controlId="msStudents" className="my-3">
            <Form.Label>MS Students</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter MS students (comma-separated)"
              value={msStudents.join(',')}
              onChange={(e) => setMsStudents(e.target.value.split(','))}
            />
          </Form.Group>

          <Form.Group controlId="mtechStudents" className="my-3">
            <Form.Label>MTech Students</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter MTech students (comma-separated)"
              value={mtechStudents.join(',')}
              onChange={(e) => setMtechStudents(e.target.value.split(','))}
            />
          </Form.Group>

          <Form.Group controlId="btechStudents" className="my-3">
            <Form.Label>BTech Students</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter BTech students (comma-separated)"
              value={btechStudents.join(',')}
              onChange={(e) => setBtechStudents(e.target.value.split(','))}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="mt-2">
            Update
          </Button>
        </Form>
      )}
    </FormContainer>
  </>
};

export default FacultyEditScreen;