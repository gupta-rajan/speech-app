import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetResearchByIdQuery } from '../slices/researchApiSlice';
import Research from '../components/Research';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ResearchScreen = () => {
  const { id } = useParams(); // Get the research ID from the URL

  // Use the Redux query hook to fetch research data by ID
  const { data: research, isLoading, error } = useGetResearchByIdQuery(id);

  return (
    <div>
      {isLoading? (
        <Loader />
      ): error? (<Message variant='danger'>{error?.data?.message || error.error}</Message>):
      (
        research && <Research research={research} /> // Display research data if available
      )}
    </div>
  );
};

export default ResearchScreen;