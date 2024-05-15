import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { toast } from 'react-toastify';
import { useGetProjectsQuery, useCreateProjectMutation, useDeleteProjectMutation } from '../../slices/projectsApiSlice';

const ProjectListScreen = () => {
  const { data: projects, isLoading, error, refetch } = useGetProjectsQuery();

  const [createProject, { isLoading: loadingCreate }] = useCreateProjectMutation();
  const [deleteProject, { isLoading: loadingDelete }] = useDeleteProjectMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure want to delete?')) {
      try {
        await deleteProject(id);
        toast.success("Project deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const createProjectHandler = async () => {
    if (window.confirm("Are you sure you want to create a new project?")) {
      try {
        await createProject();
        toast.success("Project created successfully");
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
          <h1>Projects</h1>
        </Col>
        <Col className='text-end'>
          <Button className='btn-sm m-3' onClick={createProjectHandler}>
            <FaEdit /> Create Project
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
              <th>Status</th>
              <th>Description</th>
              <th>Sponsored By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id}>
                <td>{project.title}</td>
                <td>{project.status}</td>
                <td>{project.description}</td>
                <td>{project.sponsoredBy}</td>
                <td>
                  <LinkContainer to={`/admin/project/${project._id}/edit`}>
                    <Button variant='light' className='btn-sm mx-2'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(project._id)}
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

export default ProjectListScreen;