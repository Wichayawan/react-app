import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-8/12 lg:w-6/12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg text-center">
          Welcome to our website! We are dedicated to providing the best services to our customers.
          Our team is passionate about what we do, and we strive to exceed expectations in everything we undertake.
        </p>
      </div>
    </div>
  );
}

export default About;
