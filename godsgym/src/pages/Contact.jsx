import React from 'react';

function Contact() {
  return (
    <div className="container section text-light">
      <h2 className="highlight text-center mb-4">Contact & Info</h2>
      <p className="lead text-center mb-5">
        Get in touch with us for membership, queries, or feedback. We're here to help you on your fitness journey!
      </p>

      {/* Location & Contact Form */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h3 className="highlight">Location</h3>
          <p>123 Fitness Avenue, Sector 9, New Delhi, India</p>
          <iframe
            src="https://maps.google.com/maps?q=New+Delhi+Sector+9&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="200"
            style={{ border: '2px solid #ffe066', borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
        <div className="col-md-6">
          <h3 className="highlight">Contact Us</h3>
          <p>Email: <span className="highlight">info@godsgym.com</span></p>
          <p>Phone: <span className="highlight">+91 98765 43210</span></p>
          <form>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message:</label>
              <textarea className="form-control" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-yellow w-100">Send Message</button>
          </form>
        </div>
      </div>

      {/* Reviews */}
      <div className="mb-5">
        <h3 className="highlight mb-4">Reviews</h3>
        <div className="review-card">
          <strong>Priya Sharma:</strong> <span className="highlight">★★★★★</span>
          <p>Best gym in the city! Trainers are very supportive and the environment is motivating.</p>
        </div>
        <div className="review-card">
          <strong>Amit Verma:</strong> <span className="highlight">★★★★★</span>
          <p>Modern equipment, clean facilities, and great group classes. Highly recommend!</p>
        </div>
        <div className="review-card">
          <strong>Sneha Gupta:</strong> <span className="highlight">★★★★☆</span>
          <p>Love the flexible timings and the nutrition advice. Could use more yoga sessions.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
