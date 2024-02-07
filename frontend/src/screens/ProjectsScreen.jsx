import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectRow from '../components/ProjectRow';
// import projectData from '../projects';

const ProjectsScreen = () => {

  const [projectData, setProjectData] = useState([]);

  useEffect(()=>{
    const fetchProjects = async()=>{
      const {data} = await axios.get('/api/projects');
      setProjectData(data);
    }

    fetchProjects();
  },[]);

    // Filter ongoing projects
    const ongoingProjects = projectData.filter((project) => project.status === 'Ongoing');
  
    // Filter completed projects
    const completedProjects = projectData.filter((project) => project.status === 'Completed');
  
    return (
      <div>
        <h2>Ongoing Projects</h2>
        {ongoingProjects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
  
        <h2 className="mt-4">Completed Projects</h2>
        {completedProjects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    );
  };

export default ProjectsScreen;