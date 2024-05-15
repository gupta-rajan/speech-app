import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useGetProjectByIdQuery, useUpdateProjectMutation } from '../../slices/projectsApiSlice';

const ProjectEditScreen = () => {
  const navigate = useNavigate();
  const { id: projectId } = useParams(); // Get the project ID from the URL

  // State to manage form fields
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Ongoing');
  const [description, setDescription] = useState('');
  const [sponsoredBy, setSponsoredBy] = useState('');
  const [principalInvestigator, setPrincipalInvestigator] = useState('');
  const [image, setImage] = useState('');

  // Fetch project data
  const { data: project, isLoading, error } = useGetProjectByIdQuery(projectId);
  const [updateProject, { isLoading: loadingUpdate }] = useUpdateProjectMutation();

  useEffect(() => {
    if (project) {
      // Initialize form fields with existing data
      setTitle(project.title);
      setStatus(project.status);
      setDescription(project.description);
      setSponsoredBy(project.sponsoredBy);
      setPrincipalInvestigator(project.principalInvestigator || '');
      setImage(project.image || '');
    }
  }, [project]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedProject = {
      projectId,
      title,
      status,
      description,
      sponsoredBy,
      principalInvestigator,
      image,
    };

    const result = await updateProject({ id: projectId, ...updatedProject });

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Project updated successfully!');
      navigate('/admin/projectList'); // Redirect back to project list
    }
  };

  return (
    <>
      <Link to='/admin/projectList' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Project</h1>
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

            <Form.Group controlId="status" className="my-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
              </Form.Control>
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

            <Form.Group controlId="sponsoredBy" className="my-3">
              <Form.Label>Sponsored By</Form.Label>
              <Form.Control
                type='text'
                placeholder="Enter sponsor"
                value={sponsoredBy}
                onChange={(e) => setSponsoredBy(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="principalInvestigator" className="my-3">
              <Form.Label>Principal Investigator</Form.Label>
              <Form.Control
                type='text'
                placeholder="Enter principal investigator"
                value={principalInvestigator}
                onChange={(e) => setPrincipalInvestigator(e.target.value)}
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

export default ProjectEditScreen;