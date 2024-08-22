import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import emailjs from 'emailjs-com';
import img1 from '../assets/balu1.png';
import img2 from '../assets/pc1.avif';
import img3 from '../assets/po1.jpg';
import img4 from '../assets/a5.png';
import '../style/home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    tnc: false,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const images = [
    { src: img1, description: 'Sarvadnya Group Of Construction, Nanded' },
    { src: img2, description: 'Sarvadnya Group Of Construction, Nanded' },
    { src: img1, description: 'Sarvadnya Group Of Construction, Nanded' },
    { src: img3, description: 'Sarvadnya Group Of Construction, Nanded' },
  ];

  const settings = {
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 3000,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    useKeyboardArrows: true,
    renderArrowPrev: (onClickHandler, _hasPrev, _label) => (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 z-10"
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 1.5L21.6 3.75L10.5 15L21.6 26.25L19.5 28.5L6.00001 15L19.5 1.5Z" fill="white" />
        </svg>
      </button>
    ),
    renderArrowNext: (onClickHandler, _hasNext, _label) => (
      <button
        type="button"
        onClick={onClickHandler}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 z-10"
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 1.5L8.39999 3.75L19.5 15L8.39999 26.25L10.5 28.5L24 15L10.5 1.5Z" fill="white" />
        </svg>
      </button>
    ),
  };

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
  
    // Define the regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  
    // Validate form fields
    if (!formData.name || !formData.email || !formData.mobile || !formData.message || !formData.tnc) {
      setError('Please fill in all fields and accept the terms.');
      setIsLoading(false);
      return;
    }
  
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }
  
    if (!phoneRegex.test(formData.mobile)) {
      setError('Please enter a valid phone number.');
      setIsLoading(false);
      return;
    }
  
    try {
      // Send data to the backend
      const response = await fetch('https://sarvadnyagoc-backend.onrender.com/api/addcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          acceptTnC: formData.tnc,
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok. Status: ${response.status} - ${errorText}`);
      }
  
      // Send email using EmailJS
      await emailjs.send('service_30r7j7q', 'template_zhdv0wq', {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      }, 'icEnC8EKfVVeSyDmG');
  
      // Show success popup
      setShowPopup(true);
  
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
        tnc: false,
      });
    } catch (error) {
      console.error('Error:', error);
      setError(`There was an error submitting the form: ${error.message}. Please try again later.`);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white text-white mt-20">
      {/* Slider Section */}
      <div className="relative lg:w-2/3 w-full lg:pr-4 lg:pl-2 lg:py-0 lg:mb-0 mb-4 h-60 lg:h-auto">
        <Carousel {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <p className="legend absolute bottom-0 left-0 w-full text-center py-2">{image.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Form Section */}
      <div className="lg:w-1/3 flex flex-col justify-center bg-white p-6 h-auto">
        <span className="text-2xl font-bold mb-4 text-gray-800 items-center mt-2 ml-12">Talk to Our Expert</span>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors duration-300"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors duration-300"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="mobile" className="block text-gray-800 font-medium mb-2">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors duration-300"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="message" className="block text-gray-800 font-medium mb-2">Message</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors duration-300"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="tnc"
              checked={formData.tnc}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="tnc" className="text-gray-800">I accept the <a href="#terms" className="text-yellow-500 underline">Terms and Conditions</a></label>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {isLoading ? (
            <button type="submit" className="bg-yellow-500 text-white p-3 rounded-lg cursor-not-allowed" disabled>
               <span className="flex items-center justify-center">
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Sending...
              </span>
            </button>
          ) : (
            <button type="submit" className="bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
              Send
            </button>
          )}
        </form>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-6 rounded-lg text-center">
            <img src={img4} className='h-10 mx-auto mt-0' alt='Description of image' />
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Thank You!</h2>
              <p className="text-gray-600 mb-4">Your message has been sent successfully.</p>
              <button
                type="button"
                onClick={handleClosePopup}
                className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-800 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
