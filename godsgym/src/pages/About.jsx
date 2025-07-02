import React from 'react';
import aboutbhushanImg from '../assets/bhushan.jpg'; // Adjust path if needed

function About() {
  return (
    <div className="container section pt-5 mt-5 text-light">
      <h2 className="highlight text-center mb-5">About Us</h2>

      <div className="row align-items-center justify-content-between gy-5">
        <div className="col-lg-7">
          <p className="lead mb-4 text-md-start text-center">
            <strong>Gods Gym</strong> aims to bring next generation fitness with top-notch specialized workout facilities and training programs for all members. Our gym offers progressive physical training formats, state-of-the-art equipment, and an expansive floor for a wide assortment of specialized programs led by industry professionals.
          </p>

          <p className="lead mb-4 text-md-start text-center">
            More than just a gym, <strong>Gods Gym</strong> is a way of life. We’re committed to delivering the best fitness experience under the supervision of qualified and experienced trainers. Whether you're here for functional training, bootcamps, body transformation, or weight goals — we’ve got you covered.
          </p>

          <p className="lead text-md-start text-center">
            Our team brings unmatched talent, creativity, and professionalism. We always prioritize your needs and stay with you every step of your fitness journey.
          </p>
        </div>

        <div className="col-lg-5 text-center">
          <img
            src={aboutbhushanImg}
            alt="Gym owner Bhushan"
            className="img-fluid"
            style={{
              maxWidth: '100%',
              borderRadius: 16,
              border: 'none',
              boxShadow: '0 4px 24px rgba(255, 224, 102, 0.3)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
