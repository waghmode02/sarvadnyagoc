import React from 'react';

// eslint-disable-next-line react/prop-types
const ValueCard = ({ icon, title, description, explanation, isHovered, onMouseEnter, onMouseLeave, onTouchStart, onTouchEnd }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {!isHovered ? (
        <>
          <div className="flex items-center justify-center w-12 h-12 bg-yellow-500 rounded-full mb-4">
            <img src={icon} alt={title} className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </>
      ) : (
        <div className="mt-4 transition-opacity duration-300 bg-blue-600 p-2">
          <p className="text-white">{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default ValueCard;
