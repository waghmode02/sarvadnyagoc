import React from 'react';

const ProjectCard = ({ image, title, description, location }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105 hover:shadow-xl">
      <img className="w-full object-cover h-48" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {location}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
