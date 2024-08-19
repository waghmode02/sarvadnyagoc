import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppIcon.css'; // Import the CSS file

const WhatsAppIcon = () => {
  const handleClick = () => {
    const phoneNumber = '919764518999'; // Correct format without '+'
    const message = 'Hi..';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="whatsapp-icon fixed bottom-4 left-4 bg-green-500 p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-colors duration-300"
      onClick={handleClick}
      style={{ zIndex: 1000 }} 
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
    </div>
  );
};

export default WhatsAppIcon;
