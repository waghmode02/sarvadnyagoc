import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

// Sample images for the slider
import image1 from '../assets/p1.jpg';
import image2 from '../assets/p4.jpg';
import image3 from '../assets/p3.jpg';
import image4 from '../assets/p2.png';
import image5 from '../assets/house.jpg';

const steps = [
  { id: 1, title: 'Contact Us', image: image1 },
  { id: 2, title: 'Meet Us - Scope of Work', image: image2 },
  { id: 3, title: 'Select Your Package & Finalize the Service Agreement', image: image3 },
  { id: 4, title: 'Decide the Design', image: image4 },
  { id: 5, title: 'Move-in', image: image5 },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mt-24 p-4 text-center bg-white mt-0">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <p className="text-gray-600 mb-12">
        Our house construction steps are simple and easy to understand: Dream House building experience cumulated in 5 simple steps
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <Carousel
            selectedItem={activeStep}
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={false}
            interval={3000}
          >
            {steps.map((step) => (
              <div key={step.id}>
                <img src={step.image} alt={step.title} className="rounded-lg shadow-lg" />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center mb-4 lg:mb-4 cursor-pointer transition duration-300 transform hover:scale-105 ${activeStep === index ? 'text-black' : 'text-gray-500'}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${activeStep === index ? 'bg-black text-white' : 'bg-gray-300 text-black'}`}>
                  {index + 1}
                </div>
                <div className="ml-4 text-left">
                  <h4 className="text-lg font-medium">{step.title}</h4>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-grow border-t-2 border-dashed mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
