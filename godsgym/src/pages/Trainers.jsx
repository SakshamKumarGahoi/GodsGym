import React from 'react';
import trainer1 from '../assets/trainer1.jpg';
import trainer2 from '../assets/trainer2.jpg';
import trainer3 from '../assets/trainer3.jfif';
import BMICalculator from '../components/BMICalculator';

const trainers = [
  {
    name: 'Amit Singh',
    title: 'Strength Coach',
    img: trainer1,
  },
  {
    name: 'Neha Verma',
    title: 'HIIT Specialist',
    img: 'https://plus.unsplash.com/premium_photo-1663045836063-b89d0223ef99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Ravi Kumar',
    title: 'Personal Trainer',
    img: trainer3,
  },
];


function Trainers() {
  return (
    <section
      className="container section py-5"
      style={{ paddingTop: '100px', paddingBottom: '60px' }}
    >
      <h2 className="highlight text-center mb-4">Trainers & Services</h2>
      <p className="lead text-center mb-5">
        Meet our certified trainers and explore our range of fitness services designed for all levels.
      </p>

      {/* Trainer Cards */}
      <div className="row justify-content-center">
        {trainers.map((trainer, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="trainer-card position-relative overflow-hidden" style={{ borderRadius: '16px' }}>
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-100"
                style={{
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  border: '2px solid #ffe066',
                }}
              />
              <div className="trainer-info-overlay">
                <h5>{trainer.name}</h5>
                <p>{trainer.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BMI Calculator */}
      <div className="mt-5 pt-4">
        <h3 className="highlight text-center mb-4">Know Your BMI</h3>
        <BMICalculator />
      </div>

      {/* Hover Styling */}
      <style>{`
        .trainer-card {
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .trainer-card:hover {
          transform: scale(1.02);
        }
        .trainer-info-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.75);
          color: #ffe066;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 16px;
          padding: 20px;
          text-align: center;
        }
        .trainer-card:hover .trainer-info-overlay {
          opacity: 1;
        }
        .trainer-info-overlay h5 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .trainer-info-overlay p {
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </section>
  );
}

export default Trainers;
