import React, { useState } from 'react';
import ValueCard from './ValueCard';

import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.png";
import a3 from "../assets/a4.png";
import a4 from "../assets/a5.png";

const values = [
  {
    icon: a1,
    title: 'Commitment',
    description: 'I am willing and able to improve myself on a constant basis.',
    explanation: 'I bring a 100% effort into everything that I undertake. I have the desire to achieve my personal and company goals.'
  },
  {
    icon: a2,
    title: 'Adaptabilityt',
    description: 'Respecting the individual is fundamental to all my interactions.',
    explanation: 'I am willing and able to improve myself on a constant basis. I respond to challenges by being open-minded.'
  },
  {
    icon: a3,
    title: 'Respect',
    description: 'I put my mind as well as my heart into my work.',
    explanation: 'Respecting the individual is fundamental to all my interactions. I always focus on the problem and not on the person.'
  },
  {
    icon: a4,
    title: 'Enjoyment',
    description: 'I put my mind as well as my heart into my work.',
    explanation: 'I put my mind as well as my heart into work. I build enjoyment into daily activities. I like to work in an energetic and rewarding environment.'
  },
];

const AboutUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = index => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);
  const handleTouchStart = index => setHoveredIndex(index);
  const handleTouchEnd = () => setHoveredIndex(null);

  return (
    <div className="bg-yellow-50 py-12 px-6 md:px-12 mt-20">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-yellow-600 mb-8 text-center">About Us</h1>
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Company</h2>
          <p className="text-gray-700 leading-relaxed">
  <strong>Sarvadnya Group Of Construction, Nanded</strong>, is a premier construction company led by founder <strong>Balaji Mungal</strong>. With a commitment to quality and innovation, we deliver outstanding construction solutions that meet the highest standards of excellence.
</p>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to be the leading construction company in the region, renowned for our commitment to excellence, sustainability, and customer satisfaction. We strive to create lasting value through innovative and reliable construction solutions.
          </p>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide superior construction services that exceed client expectations while maintaining the highest levels of safety and environmental responsibility. We are dedicated to building lasting relationships with our clients, employees, and community.
          </p>
        </section>
        <section>
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-4">Our Values</h2>
          <p className="text-gray-700 leading-relaxed">Our values represent what we stand for as a corporate citizen, a business partner and an employer. They inspire us and will be embodied by our employees at every level, function of our business. Our prevailing company values are</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                explanation={value.explanation}
                isHovered={hoveredIndex === index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
