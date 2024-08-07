import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = ({ projects, status }) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">
        {status === 'ongoing' ? 'Ongoing Projects' : 'Completed Projects'}
      </h2>
      <div className="flex flex-wrap -mx-2">
        {projects.map((project) => (
          <div key={project.id} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <ProjectCard 
              image={project.image}
              title={project.title}
              description={project.description}
              location={project.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
