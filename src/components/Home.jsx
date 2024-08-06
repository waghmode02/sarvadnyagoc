/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import img1 from "../assets/slide1.png";
import '../style/home.css'; 

const Home = () => {
  const images = [
    { src: img1, description: "Sarvadnya Group Of Construction, Nanded" },
    { src: img1, description: "Sarvadnya Group Of Construction, Nanded" },
    { src: img1, description: "Sarvadnya Group Of Construction, Nanded" },
    { src: img1, description: "Sarvadnya Group Of Construction, Nanded" },
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

  return (
    <div className="flex flex-col lg:flex-row bg-gray-800 text-white mt-20">
      {/* Slider Section */}
      <div className="relative lg:w-2/3 w-full lg:pr-4 lg:pl-2 lg:py-0 lg:mb-0 mb-4 h-60 lg:h-auto">
        <Carousel {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <p className="legend absolute bottom-0 left-0 w-full text-center py-2">{image.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Form Section */}
      <div className="lg:w-1/3 flex flex-col justify-center bg-gray-900 p-6 h-auto">
        <span className="text-2xl font-bold mb-4 bg-yellow-600 items-center">Talk to Our Expert</span>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg mb-1">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="text-black w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500  duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="text-black w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="text-black w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-300"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              id="tnc"
              type="checkbox"
              className="mr-2 text-black"
              required
            />
            <label htmlFor="tnc" className="text-sm">
              I accept the T&C of Sarvadnya Goc Group Of Companies. I am aware of being contacted by Technical experts of Sarvadnya Group Of Companies listed on the website via Calls, SMS, OR Email regarding services.
            </label>
          </div>
          <button type="submit" className=" w-full py-2 px-4 bg-yellow-600 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300">
            Submit
          </button>
        </form>
        <div className="mt-6 flex space-x-4">
          <FaInstagram className="text-3xl hover:text-blue-500 transition-colors duration-300" />
          <FaWhatsapp className="text-3xl hover:text-green-500 transition-colors duration-300" />
          <FaLinkedin className="text-3xl hover:text-blue-700 transition-colors duration-300" />
          <FaPhoneAlt className="text-3xl hover:text-yellow-500 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Home;
