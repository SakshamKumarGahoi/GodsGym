import React from 'react';

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
      {/* Fullscreen Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/gym-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Content */}
      <div
        className="position-relative d-flex flex-column justify-content-center align-items-center text-center px-3"
        style={{
          zIndex: 2,
          color: '#ffe066',
          textShadow: '2px 2px 8px #000',
        }}
      >
        <h1 className="display-3 fw-bold mb-3">NOT YOUR AVERAGE GYM</h1>
        <h2 className="fw-semibold mb-3">MAKE YOURSELF STRONGER THAN YOUR EXCUSES</h2>

        <p className="lead mb-4" style={{ maxWidth: 600 }}>
          <span className="highlight">Train Hard. Train Bold. Train Like a GOD.</span>
        </p>
        <a href="Plans" className="btn btn-yellow btn-lg">
          See Plans & Timings
        </a>
      </div>
    </section>
  );
}

export default Hero;
