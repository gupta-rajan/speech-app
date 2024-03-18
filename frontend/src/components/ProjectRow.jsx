import React, { useState } from 'react';

const ProjectRow = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border-bottom py-3">
      <div onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        <h6 className='mt-3'>{project.title}</h6>
      </div>
      {expanded && (
        <div className="mt-3">
          <p><strong>Short Description:</strong> {project.description}</p>
          {project.sponsoredBy!=='NA' && <p><strong>Sponsored By:</strong> {project.sponsoredBy}</p>}
          <p><strong>Principal Investigator:</strong> {project.principalInvestigator}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectRow;