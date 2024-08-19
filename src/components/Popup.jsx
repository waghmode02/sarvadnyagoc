// Popup.jsx
import React from 'react';

const Popup = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-3/4 md:w-1/2 lg:w-1/3">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <img src={service.image} alt={service.title} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Popup;
