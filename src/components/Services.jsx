import React from 'react';
import ServiceCard from './ServiceCard';
import img1 from '../assets/service-1.jpg';
import img2 from '../assets/service-2.jpg';
import img3 from '../assets/service-3.jpg';
import img4 from '../assets/service-4.jpg';
import img5 from '../assets/service-6.jpg';
import img6 from '../assets/service-7.jpg';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: img1,
      title: "On Going Projects",
      description: "Details about ongoing projects."
    },
    {
      id: 2,
      image: img2,
      title: "Residential Construction",
      description: "Details about residential construction services."
    },
    {
      id: 3,
      image: img3,
      title: "Commercial Construction",
      description: "Details about commercial construction services."
    },
    {
      id: 4,
      image: img4,
      title: "Offices",
      description: "Details about office construction services."
    },
    {
      id: 5,
      image: img5,
      title: "Land Surveyor",
      description: "Details about land surveyor services."
    },
    {
      id: 6,
      image: img6,
      title: "Quality Check",
      description: "Details about quality check services."
    }
  ];

  return (
    <div className="services-container mt-24 p-4 bg-yellow-50 mt-0">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
