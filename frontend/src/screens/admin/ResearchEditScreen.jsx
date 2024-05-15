import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import { useGetResearchByIdQuery, useUpdateResearchMutation, useUploadResearchImageMutation } from '../../slices/researchApiSlice';

const ResearchEditScreen = () => {
  const navigate = useNavigate();
  const { id: researchId } = useParams(); // Get the research ID from the URL

  // State to manage form fields
  const [title, setTitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [content, setContent] = useState(['']);

  // Fetch research data
  const { data: research, isLoading, error } = useGetResearchByIdQuery(researchId);
  const [updateResearch, { isLoading: loadingUpdate }] = useUpdateResearchMutation();
  const [uploadResearchImage, { isLoading: loadingUpload }] = useUploadResearchImageMutation(); 

  useEffect(() => {
    if (research) {
      // Initialize form fields with existing data
      setTitle(research.title);
      setImagePath(research.images[0]?.imagePath || '');
      setContent(research.images[0]?.content || ['']);
    }
  }, [research]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const updatedResearch = {
      researchId,
      title,
      images: [
        {
          imagePath,
          content
        }
      ]
    };

    const result = await updateResearch({ id: researchId, ...updatedResearch });

    if(result.error){
        toast.error(result.error);
    } else {
        toast.success('Research updated successfully!');
        navigate('/admin/researchList'); // Redirect back to research list
    }
  }; 

  const uploadFileHandler = async(e)=>{
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res= await uploadResearchImage(formData).unwrap();
      toast.success(res.message);
      setImagePath(res.image);
    }
    catch (err){
      toast.error(err?.data?.message || err.error);
    }
  }

  return <>
    <Link to='/admin/researchList' className='btn btn-light my-3'>
        Go Back
    </Link>
    <FormContainer>
      <h1>Edit Research</h1>
      {isLoading || loadingUpdate || loadingUpload ? (
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

          <Form.Group controlId="imagePath" className='my-2'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              value={imagePath}
              onChange={(e) => setImagePath(e.target.value)}
            />
            <Form.Control type='file' label='Choose file' onChange={uploadFileHandler} />
          </Form.Group>

          <Form.Group controlId="content" className="my-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter content (comma-separated)"
              value={content.join(',')}
              onChange={(e) => setContent(e.target.value.split(','))}
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

export default ResearchEditScreen;