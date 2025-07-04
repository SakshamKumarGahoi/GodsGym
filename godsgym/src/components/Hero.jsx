import React from 'react';
import Plans from '../pages/Plans';
function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          width: '100vw',
          height: '100vh',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
          zIndex: 0,
          left: 0,
          top: 0,
        }}
      >
        <source src="/gym-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="position-relative d-flex flex-column justify-content-center align-items-center text-center px-3"
        style={{
          zIndex: 2,
          color: '#232323', // matches bg color, making text blend in
        }}
      >
        <h2 className="fw-semibold mb-3">
          MAKE YOURSELF STRONGER THAN YOUR EXCUSES
        </h2>

        <p className="lead mb-4" style={{ maxWidth: 600 }}>
          <span className="highlight">
            Train Hard. Train Bold. Train Like a GOD.
          </span>
        </p>

        <a
          href="./pages/Plans"
          className="btn btn-yellow btn-lg"
          style={{ color: '#232323' }}
        >
          See Plans & Timings
        </a>
      </div>
    </section>
  );
}

export default Hero;
