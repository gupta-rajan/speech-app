import React from 'react';
import ProjectRow from '../components/ProjectRow';
import { useGetProjectsQuery } from '../slices/projectsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProjectsScreen = () => {

  const {data: projectData,isLoading,error} = useGetProjectsQuery();

    // Filter ongoing projects
    const ongoingProjects = projectData? projectData.filter((project) => project.status === 'Ongoing'): [];
  
    // Filter completed projects
    const completedProjects = projectData? projectData.filter((project) => project.status === 'Completed'): [] ;
  
    return (
      <>
        {isLoading? (
          <Loader />
        ): error? (<Message variant='danger'>{error?.data?.message || error.error}</Message>):
        (<>
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
        </>)}
      </>
    );
  };

export default ProjectsScreen;