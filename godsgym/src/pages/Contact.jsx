import React, { useEffect } from 'react';

function Contact() {
  // Load Elfsight script only once
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
          <p>God’s Gym by Fitmomshivani, Sector 9, New Delhi, India</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.1093550615448!2d77.42566725823662!3d28.700922058594492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf14f0dc7dc37%3A0xf17e7875ff521116!2sGod%E2%80%99s%20gym%20by%20Fitmomshivani!5e0!3m2!1sen!2sin!4v1719582979344!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: '2px solid #ffe066', borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="God’s Gym Location"
          ></iframe>
        </div>

        <div className="col-md-6">
          <h3 className="highlight">Contact Us</h3>
          <p>Email: <span className="highlight">info@godsgym.com</span></p>
          <p>Phone: <span className="highlight">+91 80768 85521</span></p>
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

      {/* Instagram Feed */}
      <div className="mt-5">
        <h3 className="highlight text-center mb-4">Follow Us on Instagram</h3>
        <div className="d-flex justify-content-center">
          <div
            className="elfsight-app-7d2ae611-18cb-4786-9890-c0241e1c50a0"
            data-elfsight-app-lazy
            style={{
              width: '100%',
              maxWidth: '1000px',
              margin: '0 auto',
              padding: '0 15px',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
