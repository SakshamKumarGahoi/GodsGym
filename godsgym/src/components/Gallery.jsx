import React, { useState } from 'react';
import gym1 from '../assets/gym1.jpg';
import gym2 from '../assets/gym2.jpg';
import gym3 from '../assets/gym3.webp';

const images = [
  gym1,
  gym2,
  gym3,
  "https://plus.unsplash.com/premium_photo-1664109999741-9c559509df58?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // 4th image
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // 5th image
  "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // 6th image
];

function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      className="gallery-section w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
      style={{
        paddingTop: '60px',
        paddingBottom: '40px',
        overflow: 'hidden',
        // background: 'transparent' OR just remove it completely
      }}
    >
      <h2 className="highlight text-center mb-4" style={{ zIndex: 2 }}>Inside Our Gym</h2>

      <div
        className="d-flex flex-wrap justify-content-center align-items-center w-100"
        style={{
          gap: 24,
          padding: '0 2vw',
          width: '100vw',
          minHeight: '70vh',
          alignContent: 'center',
        }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="d-flex align-items-center justify-content-center"
            style={{
              flex: '1 1 320px',
              maxWidth: 500,
              minWidth: 320,
              height: '40vh',
            }}
          >
            <img
              src={src}
              alt={`Gym ${idx + 1}`}
              className="gallery-img"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 16,
                border: '2px solid #ffe066',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onClick={() => setSelected(src)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 224, 102, 0.6)';
                e.currentTarget.style.borderColor = '#ffd700';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.5)';
                e.currentTarget.style.borderColor = '#ffe066';
              }}
            />

          </div>
        ))}
      </div>

      {selected && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: 'rgba(0,0,0,0.95)',
            zIndex: 1050,
            left: 0,
            top: 0,
          }}
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Enlarged"
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              borderRadius: 16,
              border: '3px solid #ffe066',
              boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
