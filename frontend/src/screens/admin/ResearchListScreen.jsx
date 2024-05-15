import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { toast } from 'react-toastify';
import { useGetAllResearchQuery, useCreateResearchMutation, useDeleteResearchMutation } from '../../slices/researchApiSlice';

const ResearchListScreen = () => {
  const { data: researchList, isLoading, error, refetch } = useGetAllResearchQuery();
  const [createResearch, { isLoading: loadingCreate }] = useCreateResearchMutation();
  const [deleteResearch, { isLoading: loadingDelete }] = useDeleteResearchMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this research project?')) {
      try {
        await deleteResearch(id);
        console.log(deleteResearch(id));
        toast.success('Research project deleted successfully');
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const createResearchHandler = async () => {
    if (window.confirm('Are you sure you want to create a new research project?')) {
      try {
        await createResearch();
        toast.success('Research project created successfully');
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
          <h1>Research Projects</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3" onClick={createResearchHandler}>
            <FaEdit /> Create Research Project
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Images</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {researchList.map((research) => (
              <tr key={research._id}>
                <td>{research._id}</td>
                <td>{research.title}</td>
                <td>
                  {research.images.map((img, index) => (
                    <img
                      key={index}
                      src={img.imagePath}
                      alt={research.title}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  ))}
                </td>
                <td>
                  <LinkContainer to={`/admin/research/${research._id}/edit`}>
                    <Button variant="light" className="btn-sm mx-2">
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(research._id)}
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

export default ResearchListScreen;