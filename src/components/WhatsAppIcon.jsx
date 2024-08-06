import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppIcon = () => {
  const handleClick = () => {
    const phoneNumber = '9595250999';
    const message = 'Hi..';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed bottom-4 left-4 bg-green-500 p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-colors duration-300"
      onClick={handleClick}
      style={{ zIndex: 1000 }} // Ensure the icon is above other elements
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
    </div>
  );
};

export default WhatsAppIcon;
