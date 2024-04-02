import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Research from '../components/Research';

const ResearchScreen = () => {
  const { id } = useParams(); // Extract ID from URL
  const [research, setResearch] = useState([]); // State to hold research data

  useEffect(() => {
    const fetchResearchData = async () => {
        const { data } = await axios.get(`/api/research/${id}`); // Fetch data from backend
        setResearch(data); // Set fetched data to state
    };

    fetchResearchData(); // Call fetchResearchData function
  }, [id]); // Dependency array to re-fetch data when ID changes

  return (
    <div>
      {research && <Research research={research} />} {/* Render Research component with fetched data */}
    </div>
  );
};

export default ResearchScreen;