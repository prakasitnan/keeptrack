import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
  onSave: (proejct: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
  };
  const cancelEditing = () => {
    setProjectBeingEdited({});
  };
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited ? (
            <ProjectForm
              project={project}
              onCancel={cancelEditing}
              onSave={onSave}
            />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
          {/* <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
          <ProjectForm /> */}
          {/* <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
              <h5 className="strong">
                <strong>{project.name}</strong>
              </h5>
              <p>{project.description}</p>
              <p>Budget : {project.budget.toLocaleString()}</p>
            </section>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
