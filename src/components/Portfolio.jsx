import React from 'react';
import ProjectsList from './ProjectsList';
import "../style/portfolio.css"
import pc1 from "../assets/house.jpg"
import pc2 from "../assets/pc1.avif"
import pc3 from "../assets/pc2.jpeg"
import po1 from "../assets/po1.jpg"
import po2 from "../assets/po2.avif"
const Portfolio = () => {
  const ongoingProjects = [
    {
      id: 1,
      image: po1,
      title: 'Sunny Meadows Renovation',
      description: 'A charming renovation project at Sunny Meadows, focusing on modernizing the farmhouse while preserving its rustic charm. Features include a new kitchen, upgraded bathrooms, and landscaped gardens.',
      location: 'Anand Nagar, Nanded',
    },
    {
      id: 2,
      image: po2,
      title: 'Ocean Breeze Villa Expansion',
      description: 'Expanding the Ocean Breeze Villa with additional luxury suites and a state-of-the-art fitness center. This project aims to enhance the villa’s amenities and improve guest experience.',
      location: 'Shri Nagar, Nanded',
    },
    {
      id: 3,
      image: po1,
      title: 'Urban Haven Revamp',
      description: 'Revamping the Urban Haven apartment with high-end finishes and smart home features. The project includes upgrading the interiors, adding energy-efficient appliances, and enhancing security systems.',
      location: 'Anand Nagar, Nanded',
    },
  ];
  
  const completedProjects = [
    {
      id: 1,
      image: pc1,
      title: 'Greenfield Estates',
      description: 'A successful residential development project featuring modern homes with sustainable design. The project included building energy-efficient houses with eco-friendly materials.',
      location: 'Anand Nagar, Nanded',
    },
    {
      id: 2,
      image: pc2,
      title: 'Cityview Towers',
      description: 'Completed high-rise apartment complex offering panoramic city views. This project included amenities such as a rooftop garden, fitness center, and a community lounge.',
      location: 'Shri Nagar, Nanded',
    },
    {
      id: 3,
      image: pc3,
      title: 'Riverside Retreat',
      description: 'A picturesque riverside residential project that blends luxury with nature. Features include spacious homes with river views, landscaped gardens, and a private park for residents.',
      location: ', Nanded',
    },
  ];
  

  return (
    <div className="portfolio-container mt-20">
      <div className="projects-section">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-4 mt-20">Ongoing Projects</h2>
        <ProjectsList projects={ongoingProjects} status="ongoing" />
      </div>
      <div className="projects-section">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-4">Completed Projects</h2>
        <ProjectsList projects={completedProjects} status="completed" />
      </div>
    </div>
  );
};

export default Portfolio;
