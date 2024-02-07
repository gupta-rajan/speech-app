import React, { useState } from 'react';

const ProjectRow = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border-bottom py-3">
      <div onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        <strong>{project.title}</strong> - {project.status}
      </div>
      {expanded && (
        <div className="mt-3">
          <p><strong>Short Description:</strong> {project.description}</p>
          <p><strong>Sponsored By:</strong> {project.sponsoredBy}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectRow;