import React from 'react';
import trainer1 from '../assets/trainer1.jpg';
import trainer2 from '../assets/trainer2.jpg';
import trainer3 from '../assets/trainer3.jfif';

const trainers = [
  {
    name: 'Amit Singh',
    title: 'Strength Coach',
    img: trainer1,
  },
  {
    name: 'Neha Verma',
    title: 'HIIT Specialist',
    img: trainer2,
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
      className="container-fluid section py-5"
      style={{ backgroundColor: '#000', color: '#f5f5f5' }}
    >
      <div className="container">
        <h2 className="highlight text-center mb-4">Trainers & Services</h2>
        <p className="lead text-center mb-5">
          Meet our certified trainers and explore our range of fitness services designed for all levels.
        </p>

        <div className="row justify-content-center">
          {trainers.map((trainer, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="trainer-card position-relative">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="w-100"
                  style={{
                    borderRadius: '16px',
                    height: '400px',
                    objectFit: 'cover',
                    border: '2px solid #ffe066',
                  }}
                />
                <div className="trainer-info-overlay d-flex flex-column justify-content-center align-items-center text-center">
                  <h5>{trainer.name}</h5>
                  <p>{trainer.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
