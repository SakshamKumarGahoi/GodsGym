import React from 'react';

function Hero() {
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        padding: 0,
        margin: 0,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0"
        style={{
          objectFit: 'cover',
          minWidth: '100vw',
          minHeight: '100vh',
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          zIndex: 0,
        }}
      >
        <source src="/gym-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center position-relative"
        style={{
          zIndex: 1,
          color: '#ffe066',
          width: '100vw',
          height: '100vh',
        }}
      >
        <h1 className="display-3 fw-bold mb-3" style={{textShadow: '2px 2px 8px #232323'}}>NOT YOUR AVERAGE GYM</h1>
        <h2 className="mb-4" style={{fontWeight: 'bold', letterSpacing: 2, textShadow: '2px 2px 8px #232323'}}>PUSH YOUR LIMITS FORWARD</h2>
        <p className="lead mb-4" style={{maxWidth: 600, margin: '0 auto', textShadow: '2px 2px 8px #232323'}}>
          Unleash your inner strength in our state-of-the-art facility.<br />
          <span className="highlight">Train Hard. Train Bold. Train Like a GOD.</span>
        </p>
        <a href="/plans" className="btn btn-yellow btn-lg me-3">See Plans & Timings</a>
      </div>
    </section>
  );
}

export default Hero;
