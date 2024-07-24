import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadedFile(null); // Reset the uploaded file state on new selection
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('audio', selectedFile);
      
      const response = await axios.post('https://sitar.iitdh.ac.in/api/fsd/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setUploadedFile(response.data.message);
    } catch (error) {
      console.error('Error uploading file: ', error);
      setUploadedFile('error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="justify-content-center">
      <h1 className='text-center'style={{color: "#007bff"}}>Fake Speech Detection</h1>
        <Col xs={12} md={8} lg={8}>
          <div className="p-4 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold text-blue-700 mb-6">Let's detect the Audio File</h3>
        
            <input
              type="file"
              accept=".wav"
              onChange={handleFileChange}
              className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none mb-4"
              style={{ maxWidth: '100%' }}
            />
        
            <Button
              onClick={handleUpload}
              style={{ backgroundColor: '#007bff', borderColor: '#007bff',fontSize: '0.875rem' }}
              className="m-2 w-full bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Upload'}
            </Button>
        
            {isUploading && (
              <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
                <div className="bg-blue-600 h-4 rounded-full animate-pulse" style={{ width: '100%' }}></div>
              </div>
            )}

            <div className="mt-3">
              {uploadedFile === 'error' && <p className="text-red-500">Error uploading file. Please try again.</p>}
              {uploadedFile === 0 && <p className="text-red-500 font-semibold">The voice input is Fake</p>}
              {uploadedFile === 1 && <p className="text-green-500 font-semibold">The voice input is Real</p>}
              {uploadedFile === null && <p className="text-gray-500">Please upload an audio file.</p>}
            </div>

            <div className="mt-6">
              <Link className="btn btn-light my-3" to="/demo">Go Back</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FileUpload;