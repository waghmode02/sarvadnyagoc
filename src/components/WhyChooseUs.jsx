import React from 'react';
import houseImage from '../assets/house.jpg'; 

const stats = [
  { label: 'Effective Sq.Ft.', value: '1.46' },
  { label: 'Utility Factor', value: '72.83' },
  { label: 'Wall Area Ratio', value: '23.84' },
  { label: 'Opening Area Ratio', value: '15.8' },
  { label: 'Daylight Factor', value: '76' },
  { label: 'Ventilation Factor', value: '68' },
];

const WhyChooseUs = () => {
  return (
    <div className="mt-24 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h2>
      <div className="flex flex-col lg:flex-row items-center">
        <img src={houseImage} alt="House" className="w-full lg:w-1/2 mb-8 lg:mb-0" />
        <div className="lg:ml-8 lg:w-1/2">
          <p className="text-gray-600 mb-6">
            It is our aim to make this website a one-stop shop for your complete home construction ranging from architecture (home design) to building permissions as we help you build your home. We are here to provide you with end-to-end services while considering your preferences and making the 'best of the best' so that you can monitor from the comfort of your home. As a result, when you go through us, you are assured that you are getting the finest quality at the best price.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded mb-6">Read More</button>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">
                  {stat.value}
                </div>
                <p className="text-center mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
