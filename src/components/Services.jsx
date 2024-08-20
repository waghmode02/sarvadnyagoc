// Services.jsx
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import Popup from './Popup'; // Import Popup component
import img1 from '../assets/service-1.jpg';
import img2 from '../assets/service-2.jpg';
import img3 from '../assets/service-3.jpg';
import img4 from '../assets/service-4.jpg';
import img5 from '../assets/service-6.jpg';
import img6 from '../assets/service-7.jpg';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesData = [
    {
      id: 1,
      image: img1,
      title: "On Going Projects",
      description: "Our ongoing projects showcase the dynamic and diverse range of developments we are currently working on. From large-scale commercial buildings to residential complexes, each project is handled with precision and expertise. Our team ensures that every project is completed on time and to the highest standards, integrating innovative solutions and sustainable practices."
    },
    {
      id: 2,
      image: img2,
      title: "Residential Construction",
      description: "We specialize in creating beautiful and functional residential spaces tailored to your needs. Whether it's a single-family home, an apartment complex, or a luxury villa, our residential construction services focus on quality craftsmanship and attention to detail. We collaborate with clients to design and build homes that provide comfort, efficiency, and aesthetic appeal."
    },
    {
      id: 3,
      image: img3,
      title: "Commercial Construction",
      description: "Our commercial construction services cover a wide range of projects, including office buildings, retail spaces, and industrial facilities. We understand the unique requirements of commercial construction, including compliance with regulations and accommodating business needs. Our goal is to deliver functional, modern, and cost-effective commercial spaces that enhance your business operations."
    },
    {
      id: 4,
      image: img4,
      title: "Offices",
      description: "From design to execution, we handle all aspects of office construction to create functional, productive, and aesthetically pleasing work environments. Our services include everything from interior fit-outs to full office building constructions. We focus on creating spaces that promote productivity and reflect your company's brand identity."
    },
    {
      id: 5,
      image: img5,
      title: "Land Surveyor",
      description: "Our land surveying services provide accurate measurements and assessments critical for any construction project. We use advanced technology to gather precise data, ensuring that all land use and construction plans comply with legal requirements and are based on reliable information. Our surveying services are integral to the successful planning and execution of your projects."
    },
    {
      id: 6,
      image: img6,
      title: "Quality Check",
      description: "Quality assurance is at the core of our construction services. Our quality check processes involve rigorous inspections and testing to ensure that all work meets or exceeds industry standards. We focus on every detail, from materials and workmanship to safety and compliance, ensuring that the final outcome is of the highest quality and durability."
    },
  ];

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container mt-24 p-4 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            onClick={() => handleCardClick(service)}
          />
        ))}
      </div>
      <Popup service={selectedService} onClose={handleClosePopup} />
    </div>
  );
};

export default Services;
