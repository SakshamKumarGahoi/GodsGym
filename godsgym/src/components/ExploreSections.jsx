import React from 'react';
import { useNavigate } from 'react-router-dom'; // Or use next/router if in Next.js

function ExploreSections() {
  const navigate = useNavigate();

  return (
    <div className="container section text-center">
      <h2 className="highlight mb-4">Explore More</h2>
      <div className="row gy-4 justify-content-center">
        <div className="col-md-4">
          <div
            className="p-4 bg-dark rounded shadow"
            style={{ cursor: 'pointer', border: '2px solid #ffe066' }}
            onClick={() => navigate('/about')}
          >
            <h4 className="highlight">Know Our Story</h4>
            <p>Discover the journey, vision, and values of our gym.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="p-4 bg-dark rounded shadow"
            style={{ cursor: 'pointer', border: '2px solid #ffe066' }}
            onClick={() => navigate('/trainers')}
          >
            <h4 className="highlight">Meet Trainers</h4>
            <p>Get to know our certified trainers & personalized sessions.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="p-4 bg-dark rounded shadow"
            style={{ cursor: 'pointer', border: '2px solid #ffe066' }}
            onClick={() => navigate('/features')}
          >
            <h4 className="highlight">Know More About Gym</h4>
            <p>Explore our facilities, equipment, and environment.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="p-4 bg-dark rounded shadow"
            style={{ cursor: 'pointer', border: '2px solid #ffe066' }}
            onClick={() => navigate('/contact')}
          >
            <h4 className="highlight">Join Gym Now</h4>
            <p>Reach out to us today and start your fitness journey!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSections;
