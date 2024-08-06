import React from 'react';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs = () => {
  return (
    <div className="contact-us bg-beige-100 py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">Talk To Our Expert</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Enquiry
          </p>
        </div>
        <div className="mt-10">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 border p-6 bg-white shadow-lg rounded-lg transition-all duration-500 hover:shadow-2xl">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter your name</label>
              <input type="text" id="name" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-300" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter email address</label>
              <input type="email" id="email" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-300" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Enter mobile number</label>
              <input type="text" id="mobile" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-300" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Enter your location</label>
              <input type="text" id="location" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-300" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Enter message</label>
              <textarea id="message" rows="4" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 transition duration-300"></textarea>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full py-3 px-6 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300">Submit</button>
            </div>
          </form>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-20">
          <div className="flex flex-col items-center space-y-2">
            <FontAwesomeIcon icon={faPhone} className="text-yellow-600 text-2xl" />
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">Call Us</h2>
              <p className="text-sm text-gray-600"><a href="tel:+919595250999" className="hover:text-yellow-600">+91 9595250999</a></p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-yellow-600 text-2xl" />
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">Email</h2>
              <p className="text-sm text-gray-600"><a href="mailto:balajimungal785@gmail.com" className="hover:text-yellow-600">balajimungal785@gmail.com</a></p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-600 text-2xl" />
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">Office Address</h2>
              <p className="text-sm text-gray-600">Anand Nagar, Nanded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
